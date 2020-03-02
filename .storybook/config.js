import '../src/scss/styles.scss';
import { addParameters, configure, addDecorator } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import clutchTheme from './clutchTheme';

addParameters({
    options: {
        theme: clutchTheme
    }
});

addDecorator(withKnobs);
addDecorator(withA11y);

configure(require.context('../src/scripts/components', true, /\.stories\.js$/), module);