export default { title: 'Grid' };

export const basicGrid = () => {
    return (`
    <div class="main">
        <h2>Grid w/ Sub-grid</h2>
        <ks-row class="bg-primary">
            <ks-column class="col-2 md:col-6 sm:col-12 bg-primary-light">Column 1</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</c-column>
            <ks-column class="col-6 md:col-12 sm:col-12 bg-primary-light">
                <ks-row>
                    <ks-column>Sub-column 1</c-column>
                    <ks-column>Sub-column 2</c-column>
                    <ks-column>Sub-column 3</c-column>
                </c-row>
            </c-column>
        </c-row>
        <br>
        <h2>Grid w/ No Gutters and Sub-grid</h2>
        <ks-row class="bg-primary" no-gutter>
            <ks-column class="col-2 md:col-6 sm:col-12 bg-primary-light">Column 1</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</c-column>
            <ks-column class="col-6 md:col-12 sm:col-12 bg-primary-light">
                <ks-row>
                    <ks-column>Sub-column 1</c-column>
                    <ks-column>Sub-column 2</c-column>
                    <ks-column>Sub-column 3</c-column>
                </c-row>
            </c-column>
        </c-row>
        <br>
        <h2>Grid Using Flex-Layout Classes</h2>
        <ks-row class="bg-primary flex-column">
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 1</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 2</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 3</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 4</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 5</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 6</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 7</c-column>
            <ks-column class="col-4 md:col-6 sm:col-12 bg-primary-light">Column 8</c-column>
        </c-row>
    </div>
    `);
};
