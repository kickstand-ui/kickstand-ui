import { select } from "@storybook/addon-knobs";

export default { title: 'Components/Tabs' };

export const defaultTabs = () => {
    const position = select('position', ['top', 'bottom', 'left', 'right'], 'top');
    const align = select('align', ['start', 'center', 'end', 'justified'], 'start');
    return (`                            
        <ks-tabs class="m-xxl" position="${position}" align="${align}" style="max-width: 900px;">
            <ks-tab tab-text="<b>Three</b> Hole Punch Jim">
                <img src="https://badgerherald.com/media/2014/10/Halloween-Jim_Three-Hole-Punch-Jim.jpg" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Dave">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2018-01/10/12/asset/buzzfeed-prod-fastlane-03/sub-buzz-20247-1515605252-1.jpg" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Facebook">
                <img src="https://s-i.huffpost.com/gen/2137796/images/o-JOHN-KRASINSKI-FACEBOOK-facebook.jpg" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
        </ks-tabs>
    `);
};

export const overflowTabs = () => {
    const position = select('position', ['top', 'bottom', 'left', 'right'], 'top');
    const align = select('align', ['start', 'center', 'end', 'justified'], 'start');
    return (`                            
        <ks-tabs class="m-xxl" position="${position}" align="${align}" style="max-width: 900px;">
            <ks-tab tab-text="Three Hole Punch Jim">
                <img src="https://badgerherald.com/media/2014/10/Halloween-Jim_Three-Hole-Punch-Jim.jpg" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Dave">
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2018-01/10/12/asset/buzzfeed-prod-fastlane-03/sub-buzz-20247-1515605252-1.jpg" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Facebook">
                <img src="https://s-i.huffpost.com/gen/2137796/images/o-JOHN-KRASINSKI-FACEBOOK-facebook.jpg" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye 2">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye 3">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye 4">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye 5">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
            <ks-tab tab-text="Popeye 6">
                <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
            </ks-tab>
        </ks-tabs>
    `);
};
