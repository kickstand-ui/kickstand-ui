import "../src/scss/styles.scss";
import { applyPolyfills } from "../dist/esm/polyfills";
import { defineCustomElements } from "../dist/esm/loader";

import { addParameters, configure, addDecorator } from "@storybook/html";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import kickstandUiTheme from "./kickstandUiTheme";

applyPolyfills().then(() => {
    defineCustomElements();
});

addParameters({
    options: {
        theme: kickstandUiTheme
    }
});

addDecorator(withKnobs);
addDecorator(withA11y);

configure(
    require.context("../src/scripts/components", true, /\.stories\.ts$/),
    module
);
