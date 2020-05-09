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
    </div>
    `);
};
