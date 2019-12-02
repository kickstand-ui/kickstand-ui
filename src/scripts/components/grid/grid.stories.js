import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Grid' };

export const lazyImage = () => {
    // const src = text('src', 'https://imgix.bustle.com/rehost/2016/9/13/ffa8cec2-85d9-40ad-b386-906b75bf5610.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70');
    // const src2 = text('src2', 'https://i.pinimg.com/originals/84/dd/ee/84ddee6dff0e2af20754826aecbc5c11.jpg');
    // const alt = text('alt', 'Days of no nonsense');
    // const cssClass = text('css-class', '');
    // const lazy = boolean('lazy', true);
    // const threshold = number('threshold', 300);
    return (`
    <div class="main">
        <div class="row bg-primary">
            <div class="column col-2 md-6 sm-12 bg-primary-light">Column 1</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 2</div>
            <div class="column col-6 md-12 sm-12 bg-primary-light">
                <div class="row">
                    <div class="column">Sub-column 1</div>
                    <div class="column">Sub-column 2</div>
                    <div class="column">Sub-column 3</div>
                </div>
            </div>
        </div>
        <br>
        <div class="row bg-primary no-gutter">
            <div class="column col-2 md-6 sm-12 bg-primary-light">Column 1</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 2</div>
            <div class="column col-6 md-12 sm-12 bg-primary-light">
                <div class="row">
                    <div class="column">Sub-column 1</div>
                    <div class="column">Sub-column 2</div>
                    <div class="column">Sub-column 3</div>
                </div>
            </div>
        </div>
        <br>
        <div class="row bg-primary no-gutter stacked">
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 1</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 2</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 3</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 4</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 5</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 6</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 7</div>
            <div class="column col-4 md-6 sm-12 bg-primary-light">Column 8</div>
        </div>
    </div>
    `);
};
