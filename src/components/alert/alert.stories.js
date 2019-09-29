import { text, select } from "@storybook/addon-knobs";

export default { title: 'Alert' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link'];
const dummyText = `<b>Lloyd:</b> Some place warm, a place where the beer flows like wine, where beautiful women instinctively flock like the salmon of Capistrano. I’m talking about a little place called Aspen.<br><br><b>Harry:</b> I don’t know Lloyd, the French are assholes.`;
export const defaultHeading = () => {
    const type = select('type', types, 'primary');
    const header = text('header', 'A Little Place Called Aspen');
    const cssClass = text('css-class', 'm-md');
    return (`<c-alert css-class="${cssClass}" header="${header}" type="${type}">${dummyText}</c-alert>`);
};
