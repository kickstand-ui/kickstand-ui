export default { title: 'Alert' };

const variations  = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger', 'Light', 'Dark'];

export const withHeading = () => variations.map(x => `<c-alert css-class="m-md" header="${x} Alert" type="${x.toLowerCase()}"></c-alert>`).join('');

export const withoutHeading = () => variations.map(x => `<c-alert type="${x.toLowerCase()}"></c-alert>`).join('');