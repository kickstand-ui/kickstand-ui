import { Component, h, Prop, Host, Event, EventEmitter, ComponentInterface, Element, Method } from '@stencil/core';
import { IFormFieldData } from '../form-field/form-field';

export interface IFormData {
    isValid: boolean;
    formData: object;
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
    @Prop() disableErrorMessage: boolean = false;

    @Event() submitted!: EventEmitter<IFormData>;
    @Event() cleared!: EventEmitter;

    componentDidLoad() {
        this.$formFields = Array.from(this.$el.querySelectorAll('ks-form-field')) as HTMLKsFormFieldElement[];
    }

    componentDidRender(): void {
        this.setFormAttributes();
    }

    @Method()
    async clear() {
        this.clearHandler();
    }

    @Method()
    async submit() {
        this.$form.requestSubmit();
    }

    private async submitHandler(e: Event) {
        this.invalid = !this.$form.checkValidity();

        if (!this.action || this.invalid)
            e.preventDefault();

        let formData = await this.getFormData();

        this.submitted.emit(formData);
    }

    private async clearHandler() {
        this.invalid = false;
        this.$formFields.forEach(x => {            
            x.value = '';
            x.checked = false;
            x.invalid = false;
        });
        this.cleared.emit();
    }

    private async getFormData(): Promise<IFormData> {
        let formFieldData = await Promise.all(this.$formFields.map(async x => await x.validate()));
        let formData = {};

        formFieldData.forEach(v => {
            formData[v.name] = v.value
        });

        return {
            isValid: !this.invalid,
            formData,
            formFieldData
        };
    }

    private setFormAttributes() {
        if(this.action)
            this.$form.setAttribute('action', this.action);
            
        if(this.target)
            this.$form.setAttribute('target', this.target);

        if(this.method)
            this.$form.setAttribute('method', this.method);

        if(this.enctype)
            this.$form.setAttribute('enctype', this.enctype);

    }

    render() {
        let classes = {
            'form': true,
            'inline-form': this.inline,
            [`${this.formClass}`]: this.formClass !== undefined
        };

        return (
            <Host>
                <form class={classes} ref={el => this.$form = el} onSubmit={(e) => this.submitHandler(e)} onReset={() => this.clearHandler()} novalidate>
                    <slot />
                    {!this.disableErrorMessage && <ks-alert class={{ 'form-error': true, 'hide': !this.invalid }} color="danger">
                        {this.invalid && [
                            <span class="error-message">{this.errorMessage}</span>
                        ]}
                    </ks-alert>}
                </form>
            </Host>
        );
    }
}
