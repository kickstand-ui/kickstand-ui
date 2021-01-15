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
    @Prop() enctype: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
    @Prop({ mutable: true }) invalid: boolean = false;
    @Prop() errorMessage: string = 'One or more of the from fields are not valid. Please, review the form and try again.';
    @Prop() inline: boolean = false;
    @Prop() formClass: string;

    @Event() submitted!: EventEmitter<IFormData>;

    componentDidLoad() {
        this.$formFields = Array.from(this.$el.querySelectorAll('ks-form-field')) as HTMLKsFormFieldElement[];
    }

    private submitHandler(e: Event) {
        this.invalid = !this.$form.checkValidity();

        if (!this.action || this.invalid)
            e.preventDefault();

        let formData = this.getFormData();

        this.submitted.emit(formData);
    }

    private getFormData() {
        let formFieldData: IFormFieldData[] = [];

        this.$formFields.forEach(async x => {
            let fieldData = await x.validate();
            formFieldData.push(fieldData);
        });

        return {
            isValid: !this.invalid,
            formFieldData
        };
    }

    render() {
        let classes = {
            'form': true,
            'inline-form': this.inline,
            [`${this.formClass}`]: this.formClass !== undefined
        };

        return (
            <Host class="ks-form">
                <form class={classes} ref={el => this.$form = el} onSubmit={(e) => this.submitHandler(e)} novalidate>
                    <slot />
                    <ks-alert class={{ 'form-error': true, 'hide': !this.invalid }} color="danger">
                        {this.invalid && [
                            <ks-icon icon="warning" class="text-danger mr-sm" />,
                            <span class="error-message">{this.errorMessage}</span>
                        ]}
                    </ks-alert>
                </form>
            </Host>
        );
    }
}
