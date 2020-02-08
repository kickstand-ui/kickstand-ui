import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Grid' };

export const basicGrid = () => {
    return (`
    <div class="main">
        <div class="row bg-primary">
            <div class="col col-2 @md:col-6 @sm:col-12 bg-primary-light">Column 1</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 2</div>
            <div class="col col-6 @md:col-12 @sm:col-12 bg-primary-light">
                <div class="row">
                    <div class="col">Sub-column 1</div>
                    <div class="col">Sub-column 2</div>
                    <div class="col">Sub-column 3</div>
                </div>
            </div>
        </div>
        <br>
        <div class="row bg-primary no-gutter">
            <div class="col col-2 @md:col-6 @sm:col-12 bg-primary-light">Column 1</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 2</div>
            <div class="col col-6 @md:col-12 @sm:col-12 bg-primary-light">
                <div class="row">
                    <div class="col">Sub-column 1</div>
                    <div class="col">Sub-column 2</div>
                    <div class="col">Sub-column 3</div>
                </div>
            </div>
        </div>
        <br>
        <div class="row bg-primary no-gutter stacked">
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 1</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 2</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 3</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 4</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 5</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 6</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 7</div>
            <div class="col col-4 @md:col-6 @sm:col-12 bg-primary-light">Column 8</div>
        </div>
    </div>
    `);
};
