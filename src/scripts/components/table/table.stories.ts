import { boolean } from "@storybook/addon-knobs";

export default { title: 'Components/Table' };

// const variations = { 'Primary': 'primary', 'Secondary': 'secondary', 'Success': 'success', 'Info': 'info', 'Warning': 'warning', 'Danger': 'danger', 'Light': 'light', 'Dark': 'dark' };

export const table = () => {
    const fixedColumn = boolean('fixed-column', false);
    const fixedRow = boolean('fixed-row', false);
    const responsive = boolean('responsive', false);
    const striped = boolean('striped', false);
    const hover = boolean('hover', false);
    return (`<div class="m-xxxl">
        <ks-table fixed-column="${fixedColumn}" fixed-row="${fixedRow}" responsive="${responsive}" striped="${striped}" hover="${hover}">
        <table style="width:1600px">
            <thead>
                <tr>
                    <th style="width:600px;" scope="col">NAME</th>
                    <th style="width:600px;" scope="col">POSITION</th>
                    <th style="width:600px;" scope="col">OFFICE</th>
                    <th style="width:600px;" scope="col">AGE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                </tr>
            </tbody>
            </table>
        </ks-table>
    </div>`);
};
export const table2 = () => {
    const fixedColumn = boolean('fixed-column', false);
    const fixedRow = boolean('fixed-row', false);
    const responsive = boolean('responsive', false);
    return (`<div class="m-xxxl">
        <ks-table fixed-column="${fixedColumn}" fixed-row="${fixedRow}" responsive="${responsive}">
            <p>Some random text</p>
        </ks-table>
    </div>`);
};
