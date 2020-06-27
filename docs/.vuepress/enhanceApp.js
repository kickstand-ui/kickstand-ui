import 'kickstand-ui/dist/kickstand-ui/kickstand-ui.css';
import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.config.ignoredElements = [/ks-\w*/];

    applyPolyfills().then(() => {
        defineCustomElements();
    });
};
