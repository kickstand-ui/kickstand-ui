import { select, text } from "@storybook/addon-knobs";

const positions = ['start', 'center', 'end', 'stretch'];

export default { title: 'Components/Grid' };

export const basicGrid = () => {
    return (`
    <div class="main">
        <h2>Basic Grid</h2>
        <ks-grid class="bg-light">
            <ks-column><span class="bg-primary d-block">Column 1</span></ks-column>
            <ks-column><span class="bg-primary d-block">Column 2</span></ks-column>
            <ks-column><span class="bg-primary d-block">Column 3</span></ks-column>
            <ks-column><span class="bg-primary d-block">Column 4</span></ks-column>
        </ks-grid>
    </div>
    `);
};

export const gridWithBreakpoints = () => {
    return (`
    <h1>Grid w/ Breakpoints</h1>
    <ks-grid class="bg-primary">
        <ks-column class="col-3 sm:col-6 xs:col-12 bg-primary-light">col-3 sm:col-6 xs:col-12</ks-column>
        <ks-column class="col-4 sm:col-6 xs:col-12 bg-primary-light">col-4 sm:col-6 xs:col-12</ks-column>
        <ks-column class="col-5 sm:col-12 xs:col-12 bg-primary-light">col-5 sm:col-12 xs:col-12</ks-column>
    </ks-grid>
    `);
}

export const subgrid = () => {
    return (`
    <h2>Grid w/ Sub-grid</h2>
    <ks-grid class="bg-primary">
        <ks-column class="col-2 md:col-6 sm:col-12 bg-primary-light">Column 1</ks-column>
        <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</ks-column>
        <ks-column class="col-6 md:col-12 sm:col-12 bg-primary-light">
            <ks-grid>
                <ks-column>Sub-column 1</ks-column>
                <ks-column>Sub-column 2</ks-column>
                <ks-column>Sub-column 3</ks-column>
            </ks-grid>
        </ks-column>
    </ks-grid>
    `);
}

export const gutters = () => {
    const gutter = select('gutter', ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'], 'md');
    return (`
    <h2>Grid w/ No Gutters and Sub-grid</h2>
    <ks-grid class="bg-primary" gutter="${gutter}">
        <ks-column class="col-2 md:col-6 sm:col-12 bg-primary-light">Column 1</ks-column>
        <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</ks-column>
        <ks-column class="col-6 md:col-12 sm:col-12 bg-primary-light">
            <ks-grid>
                <ks-column>Sub-column 1</ks-column>
                <ks-column>Sub-column 2</ks-column>
                <ks-column>Sub-column 3</ks-column>
            </ks-grid>
        </ks-column>
    </ks-grid>
`);
};

export const gridAlignment = () => {
    return (`
    <ks-grid position="end" style="height:200px;">
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
    </ks-grid>
    `);
};

export const columnPositioning = () => {
    const position = select('position', positions, 'start');
    return (`
    <h1>Column Positioning</h1>
    <div class="my-xl">
        <ks-grid position="end" style="height:200px;">
            <ks-column class="bg-primary-lighter b-xs b-primary">
                <span class="bg-light p-sm">I do what the row says (end)</span>
            </ks-column>
            <ks-column class="bg-primary-lighter b-xs b-primary">
                <span class="bg-light p-sm">I do what the row says (end)</span>
            </ks-column>
            <ks-column class="bg-primary-lighter b-xs b-primary" position="${position}">
                <span class="bg-light p-sm">I do what I want! (${position})</span>
            </ks-column>
        </ks-grid>
    </div>
    `);
}

export const gridWithUtilities = () => {
    const utilities = text('classes', 'flex-column');
    return (`
    <h2>Grid Using Flex-Layout Classes</h2>
    <ks-grid class="bg-primary ${utilities}">
        <ks-column class="col-4 sm:col-6 xs:col-12 bg-primary-light">Column 1</ks-column>
        <ks-column class="col-4 sm:col-6 xs:col-12 bg-primary-light">Column 2</ks-column>
        <ks-column class="col-4 sm:col-6 xs:col-12 bg-primary-light">Column 3</ks-column>
        <ks-column class="col-4 sm:col-6 xs:col-12 bg-primary-light">Column 4</ks-column>
    </ks-grid>
    `);
}