import "../src/scss/styles.scss";
import { defineCustomElements } from "../dist/esm/loader";
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

setCustomElementsManifest(customElements);

defineCustomElements();