import { Component, h, Prop, Host, Event, EventEmitter, ComponentInterface, Element } from '@stencil/core';
import { IFormFieldData } from '../form-field/form-field';

export interface IFormData {
    isValid: boolean;
    formFieldData: IFormFieldData[];
}

@Component({
    tag: 'ks-form',
    styleUrl: 'form.scss'
})
export class Form implements ComponentInterface {
    $form: HTMLFormElement;
    $formFields: HTMLKsFormFieldElement[];

    @Element() $el: HTMLElement;

    @Prop() action: string;
    @Prop() target: '_self' | '_blank' | '_parent' | '_top';
    @Prop() method: 'get' | 'post';
    @Prop({ mutable: true }) invalid: boolean = false;
    @Prop() errorMessage: string = 'One or more of the from fields are not valid. Please, review the form and try again.';

    @Event() submitted!: EventEmitter<IFormData>;

    componentDidLoad() {
        this.$formFields = Array.from(this.$el.querySelectorAll('ks-form-field')) as HTMLKsFormFieldElement[];
    }

    private submitHandler(e) {
        e.preventDefault();
        this.invalid = !this.$form.checkValidity();
        let formFieldData: IFormFieldData[] = [];

        this.$formFields.forEach(async x => {
            let fieldData = await x.validate();

            formFieldData.push(fieldData);
        });

        let formData = {
            isValid: !this.invalid,
            formFieldData
        };

        console.log('form-data', formData);
        this.submitted.emit(formData);
    }

    render() {

        return (
            <Host class="form">
                <form ref={el => this.$form = el} onSubmit={(e) => this.submitHandler(e)} {...{ 'novalidate': !this.action }}>
                    <slot />
                    <ks-alert class={{ 'hide': !this.invalid }} color="danger"><ks-icon icon="danger" class="text-danger mr-sm" />{this.errorMessage}</ks-alert>
                </form>
            </Host>
        );
    }
}
