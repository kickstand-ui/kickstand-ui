import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import angularValueAccessorBindings from "./angular-bindings";

export const config: Config = {
    namespace: 'kickstand-ui',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'docs-readme'
        },
        {
            type: 'docs-vscode',
            file: './dist/custom-elements.json'
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
        reactOutputTarget({
            componentCorePackage: 'kickstand-ui',
            proxiesFile: '../kickstand-ui-react/src/components.ts',
            includeDefineCustomElements: true,
        }),
        angularOutputTarget({
            componentCorePackage: 'kickstand-ui',
            directivesProxyFile: '../kickstand-ui-angular/src/directives/proxies.ts',
            valueAccessorConfigs: angularValueAccessorBindings,
        }),
    ],
    globalStyle: 'src/scss/styles.scss',
    plugins: [
        sass(),
        postcss({
            plugins: [
                autoprefixer(),
                cssnano()
            ]
        })
    ],
    extras: {}
};
