const path = require("path");
const merge = require('webpack-merge');

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ["../src/scripts/components/**/*.stories.ts"],
    addons: [
        "@storybook/addon-a11y",
        "@storybook/addon-knobs",
        "@storybook/addon-viewport",
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../src/scss/styles.scss"),
        });

        // Return the altered config
        return config;
    },
};


// webpack: (config) => {
//     return merge(config, {
//         module: {
//             rules: [
//                 {
//                     test: /\.scss$/,
//                     use: ["style-loader", "css-loader", "sass-loader"],
//                     include: path.resolve(
//                         __dirname,
//                         "../src/scss/styles.scss"
//                     ),
//                 },
//                 {
//                     test: /\.js$/,
//                     loader: require.resolve(
//                         "@open-wc/webpack-import-meta-loader"
//                     ),
//                 },
//             ],
//         },
//     });
// },
