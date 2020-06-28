import { text, select, boolean, number } from '@storybook/addon-knobs';

export default { title: 'Form Field' };

const types = ['text', 'tel', 'url', 'password', 'date', 'email', 'search', 'number', 'hidden', 'spin-box', 'textarea', 'select', 'datalist'];

export const playground = () => {
    const type = select('type', types, 'text');
    const label = text('label', 'Username');
    const value = text('value', '');
    const helpText = text('help-text', '');
    const tooltipText = text('tooltip-text', '');
    const errorMessage = text('default-error-message', 'The value entered is not valid.');
    const placeholder = text('placeholder', '');
    const required = boolean('required', false);
    const requiredText = text('required-text', 'Required');
    const invalid = boolean('invalid', false);
    const disabled = boolean('disabled', false);
    const min = number('min', undefined);
    const max = number('max', undefined);
    const step = number('step', undefined);
    const minlength = number('minlength', undefined);
    const maxlength = number('maxlength', undefined);
    const autocomplete = text('autocomplete', '');
    const pattern = text('pattern', '');
    return (`<div class="m-xxl">
        <ks-form-field 
            type="${type}"
            label="${label}" 
            help-text="${helpText}"
            tooltip-text="${tooltipText}"
            default-error-message="${errorMessage}"
            placeholder="${placeholder}"
            required="${required}"
            required-text="${requiredText}"
            invalid="${invalid}"
            disabled="${disabled}"
            value="${value}"
            min="${min}"
            max="${max}"
            step="${step}"
            minlength="${minlength}"
            maxlength="${maxlength}"
            autocomplete="${autocomplete}"
            pattern="${pattern}"
            >
        </ks-form-field>
    </div>`);
};

export const selectTest = () => {
    const type = select('type', ['select', 'datalist'], 'select');
    const label = text('label', 'Username');
    const value = text('value', '');
    const helpText = text('help-text', '');
    const tooltipText = text('tooltip-text', '');
    const errorMessage = text('default-error-message', 'The value entered is not valid.');
    const placeholder = text('placeholder', '');
    const required = boolean('required', false);
    const requiredText = text('required-text', 'Required');
    const invalid = boolean('invalid', false);
    const disabled = boolean('disabled', false);
    const min = number('min', undefined);
    const max = number('max', undefined);
    const step = number('step', undefined);
    const minlength = number('minlength', undefined);
    const maxlength = number('maxlength', undefined);
    const autocomplete = text('autocomplete', '');
    const pattern = text('pattern', '');
    return (`<div class="m-xxl">
        <ks-form-field 
            type="${type}"
            label="${label}" 
            help-text="${helpText}"
            tooltip-text="${tooltipText}"
            default-error-message="${errorMessage}"
            placeholder="${placeholder}"
            required="${required}"
            required-text="${requiredText}"
            invalid="${invalid}"
            disabled="${disabled}"
            value="${value}"
            min="${min}"
            max="${max}"
            step="${step}"
            minlength="${minlength}"
            maxlength="${maxlength}"
            autocomplete="${autocomplete}"
            pattern="${pattern}"
            >
            <option selected>Choose a value</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
        </ks-form-field>
    </div>`);
};