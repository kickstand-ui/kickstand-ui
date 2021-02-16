import { text, select, boolean, number } from '@storybook/addon-knobs';

export default { title: 'Components/Form Field' };

const types = ['autocomplete', 'text', 'tel', 'url', 'password', 'date', 'email', 'search', 'number', 'hidden', 'color', 'file', 'month', 'range', 'spin-box', 'textarea', 'select', 'datalist', 'checkbox', 'checklist', 'radiolist', 'spin-box'].sort();
const sizes = ['sm', 'md', 'lg'];

export const playground = () => {
    const type = select('type', types, 'text');
    const label = text('label', 'Username');
    const hideLabel = boolean('hide-label', false);
    const value = text('value', '');
    const checked = boolean('checked', false);
    const helpText = text('help-text', '');
    const tooltipText = text('tooltip-text', '');
    const tooltipSize = text('tooltip-size', 'md');
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
    const inline = boolean('inline', false);
    const icon = text('icon', '');
    const iconDirection = select('icon-direction', ['left', 'right'], 'right');
    const size = select('size', sizes, 'md');
    const autoExpand = boolean('auto-expand', false);
    const accept = text('accept', undefined);
    const multiple = boolean('multiple', false);
    const webkitdirectory = text('webkitdirectory', undefined);
    const capture = text('capture', undefined);

    return (`<div class="m-xxl">
        <ks-form-field 
            type="${type}"
            label="${label}" 
            hide-label="${hideLabel}"
            help-text="${helpText}"
            tooltip-text="${tooltipText}"
            tooltip-size="${tooltipSize}"
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
            inline="${inline}"
            icon="${icon}"
            icon-direction="${iconDirection}"
            size="${size}"
            auto-expand="${autoExpand}"
            checked=${checked}
            multiple=${multiple}
            ${accept ? `accept="${accept}"` : ''}
            ${webkitdirectory ? `webkitdirectory="${webkitdirectory}"` : ''}
            ${capture ? `capture="${capture}"` : ''}
            >
            <option selected>Choose a value</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
            <option>Popper green 3</option>
        </ks-form-field>
    </div>`);
};

export const selectTest = () => {
    const type = select('type', ['select', 'datalist'], 'select');
    const label = text('label', 'Username');
    const hideLabel = boolean('hide-label', false);
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
            hide-label="${hideLabel}" 
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
    const indeterminate = boolean('indeterminate', false);
    const tooltipText = text('tooltip-text', '');
    const required = boolean('required', false);
    const requiredText = text('required-text', 'Required');
    const disabled = boolean('disabled', false);

    return (`
    <div class="m-xxl">
        <ks-checkbox 
            label="${label}" 
            checked="${checked}" 
            indeterminate="${indeterminate}"
            tooltip-text="${tooltipText}" 
            required="${required}" 
            required-text="${requiredText}"
            disabled="${disabled}"
            />
    </div>
    `)
}

export const radio = () => {
    return (`
    <div class="m-xxl">
        <ks-radio label="Radio 1" disabled></ks-radio>
        <ks-radio label="Radio 2"></ks-radio>
        <ks-radio label="Radio 3"></ks-radio>
    </div>
    `)
}

export const radmo = () => {
    return (`
    <select>
        <option>Choose a value</option>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
    </select>
    `)
}

export const checklist = () => {
    const type = select('type', ['checkbox', 'radio'], 'checkbox');
    const label = text('label', 'Select One');
    const tooltipText = text('tooltip-text', '');
    const helpText = text('help-text', '');
    const required = boolean('required', false);
    const requiredText = text('required-text', 'Required');
    const name = text('name', 'test');

    return (`
        <div class="m-xxl">
            <ks-checklist
                label="${label}" 
                tooltip-text="${tooltipText}" 
                required="${required}" 
                required-text="${requiredText}"
                type="${type}"
                name="${name}"
                help-text="${helpText}"
                >
                <option>Choose a value</option>
                <option disabled>Value 1</option>
                <option selected disabled>Value 2</option>
                <option>Value 3</option>
            </ks-checklist>
        </div>
    `)
}

export const checklistFormField = () => {
    return (`
        <div class="m-xxl">
            <ks-form-field type="radiolist" label="Choose your next office mates">
                <option selected>michael.scott@dundermifflin.com</option>
                <option>dwight.schrutte@dundermifflin.com</option>
                <option selected>pam.beasley@dundermifflin.com</option>
                <option>jim.halpert@dundermifflin.com</option>
                <option>Meredith.palmer@dundermifflin.com</option>
            </ks-form-field>
        </div>
    `)
}

export const autocomplete = () => {
    return (`
    <div class="m-xxl">
        <ks-form-field label="Autocomplete" type="autocomplete" required>
            <option search="Candy">Choose a value</option>
            <option search="trash">Value 1</option>
            <option>Something 2</option>
            <option>Test 3</option>
            <option>Valid 3</option>
            <option>Something 1</option>
        </ks-form-field>
    </div>
    `)
}

export const spinbox = () => {
    return (`
    <div class="m-xxl">
        <ks-form-field label="Spin-Box" type="spin-box"></ks-form-field>
    </div>
    `)
}