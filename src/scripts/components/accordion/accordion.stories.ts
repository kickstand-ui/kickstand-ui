export default { title: 'Containers/Accordion' };

const accordionData = [
    {
        heading: 'Michael Scott',
        bodyText: `"Guess what, I have flaws. What are they? Oh I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me."`
    },
    {
        heading: 'Jim Halpert',
        bodyText: `"I am about to do something very bold in this job that I've never done before... try."`
    },
    {
        heading: 'Stanley Hudson',
        bodyText: `"I have been trying to get on jury duty every year since I was 18 years old. To get and go sit in an air-conditioned room, downtown, judging people, while my lunch was paid for. That is the life."`
    },
    {
        heading: 'Dwight Schrute',
        bodyText: `"I’m an early bird and I’m a night owl. So I’m wise and I have worms."`
    },
];

export const defaultAccordion = () => {
    return (`<c-accordion class="m-xxl" style="max-width:500px;">
                ${accordionData.map(x => `<c-accordion-slide heading="${x.heading}">${x.bodyText}</c-accordion-slide>`).join('')}
            </c-accordion>`);
};
