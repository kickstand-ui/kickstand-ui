import { text, select, boolean, number } from '@storybook/addon-knobs';

export default { title: 'Form Field' };

const types = ['text', 'tel', 'url', 'password', 'date', 'email', 'search', 'number', 'hidden', 'color', 'file', 'month', 'range', 'spin-box', 'textarea', 'select', 'datalist', 'checkbox', 'checklist', 'radiolist'].sort();

export const playground = () => {
    const type = select('type', types, 'text');
    const label = text('label', 'Username');
    const value = text('value', '');
    const helpText = text('help-text', '');
    const tooltipText = text('tooltip-text', '');
    const name = text('name', '');
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
    const validateOnInput = boolean('validate-on-input', false);
    const debounce = number('debounce', 0);
    const datalist = boolean('datalist', false);
    return (`<div class="m-xxl">
        <ks-form-field 
            type="${type}"
            label="${label}" 
            help-text="${helpText}"
            tooltip-text="${tooltipText}"
            name="${name}"
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
            validate-on-input="${validateOnInput}",
            debounce="${debounce}"
            datalist="${datalist}"
            >
            <option selected>Choose a value</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
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
    const validateOnInput = boolean('validate-on-input', false);
    const debounce = number('debounce', 0);
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
            validate-on-input="${validateOnInput}"
            debounce="${debounce}"
            >
            <option selected>Choose a value</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
        </ks-form-field>
    </div>`);
};

export const checkbox = () => {
    const label = text('label', 'Checkbox');
    const checked = boolean('checked', false);
    const tooltipText = text('tooltip-text', '');
    const required = boolean('required', false);
    const requiredText = text('required-text', 'Required');

    return (`
    <div class="m-xxl">
        <ks-checkbox 
            label="${label}" 
            checked="${checked}" 
            tooltip-text="${tooltipText}" 
            required="${required}" 
            required-text="${requiredText}"
            />
    </div>
    `)
}

export const radio = () => {
    return (`
    <div class="m-xxl">
        <ks-radio />
        <ks-radio />
        <ks-radio />
    </div>
    `)
}

export const checklist = () => {
    const type = select('type', ['checkbox', 'radio'], 'checkbox');
    const label = text('label', 'Select One');
    const checked = boolean('checked', false);
    const tooltipText = text('tooltip-text', '');
    const required = boolean('required', false);
    const requiredText = text('required-text', 'Required');
    const name = text('name', 'test');

    return (`
        <div class="m-xxl">
            <ks-checklist
                label="${label}" 
                checked="${checked}" 
                tooltip-text="${tooltipText}" 
                required="${required}" 
                required-text="${requiredText}"
                type="${type}"
                name="${name}"
                >
                <option>Choose a value</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
            </ks-checklist>
        </div>
    `)
}