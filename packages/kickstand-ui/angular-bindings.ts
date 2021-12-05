import { ValueAccessorConfig } from '@stencil/angular-output-target';

const angularValueAccessorBindings: ValueAccessorConfig[] = [
    {
        elementSelectors: ['ks-form-field'],
        event: 'updated',
        targetAttr: 'value',
        type: 'text'
    }
];

export default angularValueAccessorBindings;