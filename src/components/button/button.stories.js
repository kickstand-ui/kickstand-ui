export default { title: 'Button' };

const variations  = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger', 'Light', 'Dark'];

export const buttonTypes = () => variations.map(x => `<c-button css-class="m-md" type="${x.toLowerCase()}"></c-button><br>`).join('');
