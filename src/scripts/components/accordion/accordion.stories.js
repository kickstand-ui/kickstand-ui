import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Containers/Accordion' };

const accordionData = [
    {
        heading: 'Heading 1',
        bodyText: "Bacon ipsum dolor amet porchetta hamburger chuck, salami tail cupim short loin boudin drumstick pork loin leberkas tri-tip venison. Bacon beef ribs flank chuck cupim ham pork ribeye t-bone shank short ribs pancetta. Rump bresaola hamburger andouille kevin meatloaf sausage fatback doner corned beef tongue strip steak biltong. Ham hock flank cupim beef ribs filet mignon. Kevin venison t-bone strip steak cow, tongue cupim biltong bresaola. <br><button>test</button><br> Drumstick landjaeger fatback tenderloin. Bacon ipsum dolor amet porchetta hamburger chuck, salami tail cupim short loin boudin drumstick pork loin leberkas tri-tip venison. Bacon beef ribs flank chuck cupim ham pork ribeye t-bone shank short ribs pancetta. Rump bresaola hamburger andouille kevin meatloaf sausage fatback doner corned beef tongue strip steak biltong. Ham hock flank cupim beef ribs filet mignon. Kevin venison t-bone strip steak cow, tongue cupim biltong bresaola. Drumstick landjaeger fatback tenderloin."
    },
    {
        heading: 'Heading 2',
        bodyText: "Burgdoggen andouille buffalo doner prosciutto ground round pastrami kevin beef ribs meatball chuck hamburger spare ribs sirloin boudin. Flank t-bone kielbasa salami ham hock tri-tip. Ball tip landjaeger pork rump capicola alcatra turducken doner. T-bone alcatra kielbasa jerky, porchetta salami ball tip prosciutto capicola meatball burgdoggen pork sausage landjaeger tenderloin. Shoulder salami pork ground round."
    },
    {
        heading: 'Heading 3',
        bodyText: "Corned beef shankle chicken bresaola tail, strip steak picanha flank sausage pork belly. Porchetta cupim jerky ground round salami strip steak drumstick pork loin alcatra pastrami. Brisket leberkas short loin frankfurter beef ribs chuck tail boudin shank porchetta sausage andouille meatball ball tip pork loin. Landjaeger picanha prosciutto, jerky pork chop pig sausage tail pork short ribs pork loin. Ham pork ground round pork loin, rump short loin porchetta pastrami picanha. Burgdoggen pig landjaeger sausage pancetta meatloaf sirloin tongue filet mignon t-bone jerky."
    },
    {
        heading: 'Heading 4',
        bodyText: "Beef ribs pork sirloin landjaeger shankle pig flank shoulder pancetta jerky bresaola burgdoggen porchetta cupim. Bacon corned beef capicola andouille picanha, turkey prosciutto short loin meatball kevin hamburger cow. Ground round short loin short ribs, pork loin bacon rump buffalo drumstick landjaeger cow chicken t-bone sausage ham pancetta. Tongue alcatra ham rump sirloin brisket buffalo ball tip pancetta pork chop picanha turkey strip steak ham hock meatball. Ground round salami leberkas frankfurter, spare ribs brisket tenderloin capicola jerky."
    },
];

export const defaultAccordion = () => {
    return (`<c-accordion class="m-xxl" style="max-width:500px;">
                ${accordionData.map(x => `<c-accordion-slide heading="${x.heading}">${x.bodyText}</c-accordion-slide>`).join('')}
            </c-accordion>`);
};
