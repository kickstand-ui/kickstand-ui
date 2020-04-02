import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Layout/Flex Layout' };

const directions = ['', 'flex-row', 'flex-row-reverse', 'flex-column', 'flex-column-reverse'];
const justifications = ['', 'space-between', 'space-around', 'space-evenly', 'justify-center', 'justify-start', 'justify-end'];
const alignments = ['', 'align-start', 'align-end', 'align-center', 'align-stretch'];

export const playground = () => {
    const direction = select('direction', directions, '');
    const justify = select('justify', justifications, '');
    const align = select('align', alignments, '');

    return (`<div style="min-height:10rem;" class="flex-layout bg-info-lighter ${direction} ${justify} ${align}">
        <div class="bg-light border p-sm">Column 1</div>
        <div class="bg-light border p-sm">Column 2</div>
        <div class="bg-light border p-sm">Column 3<br>Intentionally Weird</div>
    </div>`);
};