import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export const config: Config = {
    namespace: 'kickstand-ui',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader'
        },
        {
            type: 'docs-readme'
        }
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
    extras: {
        cssVarsShim: false,
        shadowDomShim: false
    }
};
