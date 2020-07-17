import { Component, h, Prop, Host } from '@stencil/core';

@Component({
    tag: 'ks-checkbox',
    styleUrl: 'form-field.scss'
})
export class Alert {
    @Prop() label: string;
    @Prop() checked: boolean;

    render() {
        return (
            <Host>
                <input class="inp-cbx hide" id="cbx" type="checkbox" />
                <label class="cbx" htmlFor="cbx"><span>
                    <svg width="0.75em" height="0.625em" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg></span><span>CodePenChallenge</span>
                </label>
            </Host>
        );
    }
}