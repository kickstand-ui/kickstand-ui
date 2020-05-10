import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Form Field' };

const types = ['text', 'tel', 'url', 'password', 'date', 'email', 'search', 'number', 'hidden', 'spin-box'];

export const playground = () => {
    const type = select('type', types, 'text');
    const label = text('label', 'Username');
    const value = text('value', '');
    const helpText = text('help-text', '');
    const tooltipText = text('tooltip-text', '');
    const errorMessage = text('error-message', '');
    const placeholder = text('placeholder', '');
    const required = boolean('required', false);
    const requiredText = text('required-text', 'Required');
    const invalid = boolean('invalid', false);
    const disabled = boolean('disabled', false);
    return (`<div class="m-xxl">
        <ks-form-field 
            type="${type}"
            label="${label}" 
            help-text="${helpText}"
            tooltip-text="${tooltipText}"
            error-message="${errorMessage}"
            placeholder="${placeholder}"
            required="${required}"
            required-text="${requiredText}"
            invalid="${invalid}"
            disabled="${disabled}"
            value="${value}"
            >
        </ks-form-field>
    </div>`);
};
