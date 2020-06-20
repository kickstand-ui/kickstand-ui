import { select } from "@storybook/addon-knobs";

export default { title: 'Tabs' };

export const defaultTabs = () => {
    const position = select('position', ['top', 'bottom', 'left', 'right'], 'top');
    return (`                            
        <ks-tabs class="m-xxl" position="${position}" style="max-width: 900px;">
            <ks-tab-list>
                <ks-tab>Three Hole Punch Jim</ks-tab>
                <ks-tab>Dave</ks-tab>
                <ks-tab>Facebook</ks-tab>
                <ks-tab>Popeye</ks-tab>
            </ks-tab-list>
            <ks-tab-panel>
                <img src="https://badgerherald.com/media/2014/10/Halloween-Jim_Three-Hole-Punch-Jim.jpg" alt="jim" />
            </ks-tab-panel>
            <ks-tab-panel>
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2018-01/10/12/asset/buzzfeed-prod-fastlane-03/sub-buzz-20247-1515605252-1.jpg" alt="jim" />
            </ks-tab-panel>
            <ks-tab-panel>
                <img src="https://s-i.huffpost.com/gen/2137796/images/o-JOHN-KRASINSKI-FACEBOOK-facebook.jpg" alt="jim" />
            </ks-tab-panel>
            <ks-tab-panel>
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab-panel>
        </ks-tabs>
    `);
};
