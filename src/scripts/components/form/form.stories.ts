import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Form' };

export const form = () => {
    const action = text('action', '');
    const target = select('target', ['', '_self', '_blank', '_parent', '_top'], '');
    const method = select('method', ['', 'GET', 'POST'], '');
    const invalid = boolean('invalid', false);
    const errorMessage = text('error-message', 'One or more of the from fields are not valid. Please, review the form and try again.');
    return (`
    <ks-form 
        class="m-xl"
        action="${action}"
        target="${target}"
        method="${method}"
        invalid="${invalid}"
        error-message="${errorMessage}"
        >
        <ks-form-field label="Name" required></ks-form-field>
        <ks-form-field label="Email" type="email" value="bad.email"></ks-form-field>
        <ks-form-field label="Accept Terms and Conditions" type="checkbox" required></ks-form-field>
        <ks-form-field label="Select Test" type="select">
            <option selected>Choose a value</option>
            <option>Value 1</option>
            <option>Value 2</option>
            <option>Value 3</option>
        </ks-form-field>
        <ks-button type="submit">Submit</ks-button>
    </ks-form>`);
};
