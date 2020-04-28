import { select } from "@storybook/addon-knobs";

export default { title: 'Utilities/Display' };

const directions = ['', 'flex-row', 'flex-row-reverse', 'flex-column', 'flex-column-reverse'];
const justifications = ['', 'space-between', 'space-around', 'space-evenly', 'justify-center', 'justify-start', 'justify-end'];
const alignments = ['', 'align-start', 'align-end', 'align-center', 'align-stretch'];

export const display = () => {
    return (`
        <div class="bg-light p-lg m-md display-block">display-block</div>
        <div class="bg-light p-lg m-md display-inline">display-inline</div>
        <div class="bg-light p-lg m-md display-inline-block">display-inline-block</div>
        <div class="bg-light p-lg m-md display-flex">display-flex</div>
        <div class="bg-light p-lg m-md display-inline-flex">display-inline-flex</div>
    `);
};

export const displayFlex = () => {
    const direction = select('direction', directions, '');
    const justify = select('justify', justifications, '');
    const align = select('align', alignments, '');

    return (`<div style="min-height:10rem;" class="display-flex bg-info-lighter ${direction} ${justify} ${align}">
        <div class="bg-light border p-sm">Column 1</div>
        <div class="bg-light border p-sm">Column 2</div>
        <div class="bg-light border p-sm">Column 3<br>Intentionally Weird</div>
    </div>`);
};