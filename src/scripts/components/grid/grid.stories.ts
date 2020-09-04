import { text } from "@storybook/addon-knobs";

export default { title: 'Grid' };

export const basicGrid = () => {
    return (`
    <div class="main">
        <h2>Grid w/ Sub-grid</h2>
        <ks-row class="bg-primary">
            <ks-column class="col-2 md:col-6 sm:col-12 bg-primary-light">Column 1</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</ks-column>
            <ks-column class="col-6 md:col-12 sm:col-12 bg-primary-light">
                <ks-row>
                    <ks-column>Sub-column 1</ks-column>
                    <ks-column>Sub-column 2</ks-column>
                    <ks-column>Sub-column 3</ks-column>
                </ks-row>
            </ks-column>
        </ks-row>
        <br>
        <h2>Grid w/ No Gutters and Sub-grid</h2>
        <ks-row class="bg-primary" no-gutter>
            <ks-column class="col-2 md:col-6 sm:col-12 bg-primary-light">Column 1</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</ks-column>
            <ks-column class="col-6 md:col-12 sm:col-12 bg-primary-light">
                <ks-row>
                    <ks-column>Sub-column 1</ks-column>
                    <ks-column>Sub-column 2</ks-column>
                    <ks-column>Sub-column 3</ks-column>
                </ks-row>
            </ks-column>
        </ks-row>
        <br>
        <h2>Grid Using Flex-Layout Classes</h2>
        <ks-row class="bg-primary flex-column">
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 1</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 3</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 4</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 5</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 6</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 7</ks-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 8</ks-column>
        </ks-row>

        <div class="my-xl">
            <ks-row position="end" style="height:200px;">
                <ks-column class="bg-primary-lighter border border-primary">
                    <span class="bg-light p-sm">I do what the row says</span>
                </ks-column>
                <ks-column class="bg-primary-lighter border border-primary">
                    <span class="bg-light p-sm">I do what the row says</span>
                </ks-column>
                <ks-column class="bg-primary-lighter border border-primary" position="start">
                    <span class="bg-light p-sm">I do what I want!</span>
                </ks-column>
            </ks-row>
        </div>
        <div class="my-xl">
            <ks-row style="height:200px;">
                <ks-column position="start" class="bg-primary-lighter border border-primary">
                    <span class="bg-light p-sm w-100">Start</span>
                </ks-column>
                <ks-column position="center" class="bg-primary-lighter border border-primary">
                    <span class="bg-light p-sm w-100">Center</span>
                </ks-column>
                <ks-column position="end" class="bg-primary-lighter border border-primary">
                    <span class="bg-light p-sm w-100">End</span>
                </ks-column>
                <ks-column position="stretch" class="bg-primary-lighter border border-primary">
                    <span class="bg-light p-sm w-100">Stretch</span>
                </ks-column>
            </ks-row>
        </div>

    </div>
    `);
};

export const gutters = () => {
    const gutter = text('gutter', 'sm');
    return (`
    <ks-row gutter="${gutter}">
        <ks-column>
            <span class="bg-light w-100">Start</span>
        </ks-column>
        <ks-column>
            <span class="bg-light w-100">Center</span>
        </ks-column>
        <ks-column>
            <span class="bg-light w-100">End</span>
        </ks-column>
        <ks-column>
            <span class="bg-light w-100">Stretch</span>
        </ks-column>
    </ks-row>
    `);
};

export const gridAlignment = () => {
    return (`
    <ks-row position="end" style="height:200px;">
        <ks-column position="start">
            <span class="bg-light p-sm w-100">Start</span>
        </ks-column>
        <ks-column position="center">
            <span class="bg-light p-sm w-100">Center</span>
        </ks-column>
        <ks-column position="end">
            <span class="bg-light p-sm w-100">End</span>
        </ks-column>
        <ks-column position="stretch">
            <span class="bg-light p-sm w-100">Stretch</span>
        </ks-column>
    </ks-row>
    `);
};
