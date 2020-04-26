import { select } from "@storybook/addon-knobs";

export default { title: 'Containers/Tabs' };

export const defaultTabs = () => {
    const position = select('position', ['top', 'bottom', 'left', 'right'], 'top');
    return (`                            
        <c-tabs class="m-xxl" position="${position}" name="categories">
            <c-tab-list>
                <c-tab controls="test-1">Test 1</c-tab>
                <c-tab controls="test-2">Test 2</c-tab>
                <c-tab controls="test-3">Test 3</c-tab>
            </c-tab-list>
            <c-tab-panel tab-id="test-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, accusamus officia iure amet in ex numquam eligendi cupiditate labore. Sapiente cumque tenetur enim quos repudiandae suscipit officia, id maiores. Repellat.
            </c-tab-panel>
            <c-tab-panel tab-id="test-2">
                Ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, accusamus officia iure amet in ex numquam eligendi cupiditate labore. Sapiente cumque tenetur enim quos repudiandae suscipit officia, id maiores. Repellat.
            </c-tab-panel>
            <c-tab-panel tab-id="test-3">
                Dolor, sit amet consectetur adipisicing elit. Distinctio, accusamus officia iure amet in ex numquam eligendi cupiditate labore. Sapiente cumque tenetur enim quos repudiandae suscipit officia, id maiores. Repellat.
            </c-tab-panel>
        </c-tabs>
    `);
};
