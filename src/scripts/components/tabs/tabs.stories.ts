import { select } from "@storybook/addon-knobs";

export default { title: 'Tabs' };

export const defaultTabs = () => {
    const position = select('position', ['top', 'bottom', 'left', 'right'], 'top');
    return (`                            
        <ks-tabs class="m-xxl" position="${position}" name="categories" style="max-width: 900px;">
            <ks-tab-list>
                <ks-tab controls="test-1">Three Hole Punch Jim</c-tab>
                <ks-tab controls="test-1">Dave</c-tab>
                <ks-tab controls="test-2">Facebook</c-tab>
                <ks-tab controls="test-3">Popeye</c-tab>
            </c-tab-list>
            <ks-tab-panel tab-id="test-1">
                <img src="https://badgerherald.com/media/2014/10/Halloween-Jim_Three-Hole-Punch-Jim.jpg" alt="jim" />
            </c-tab-panel>
            <ks-tab-panel tab-id="test-1">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2018-01/10/12/asset/buzzfeed-prod-fastlane-03/sub-buzz-20247-1515605252-1.jpg" alt="jim" />
            </c-tab-panel>
            <ks-tab-panel tab-id="test-2">
                <img src="https://s-i.huffpost.com/gen/2137796/images/o-JOHN-KRASINSKI-FACEBOOK-facebook.jpg" alt="jim" />
            </c-tab-panel>
            <ks-tab-panel tab-id="test-3">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </c-tab-panel>
        </c-tabs>
    `);
};
