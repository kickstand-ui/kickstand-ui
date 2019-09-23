import { addParameters, configure } from '@storybook/html';
import clutchTheme from './clutchTheme';

addParameters({
    options: {
        theme: clutchTheme
    }
});

configure(require.context('../src/components', true, /\.stories\.js$/), module);