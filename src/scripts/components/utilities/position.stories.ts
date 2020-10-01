export default { title: 'Utilities/Position' };

export const absolutePositions = () => {
    return (`<div class="m-xxl">
        <div class="bg-light border-dark w-25 position-relative" style="height:100px;">
            <span class="bg-danger p-sm position-absolute top-0 left-0"></span>
            <span class="bg-danger p-sm position-absolute top-50 left-0"></span>
            <span class="bg-danger p-sm position-absolute bottom-0 left-0"></span>
            <span class="bg-danger p-sm position-absolute top-0 left-50"></span>
            <span class="bg-danger p-sm position-absolute top-50 left-50"></span>
            <span class="bg-danger p-sm position-absolute bottom-0 left-50"></span>
            <span class="bg-danger p-sm position-absolute top-0 right-0"></span>
            <span class="bg-danger p-sm position-absolute top-50 right-0"></span>
            <span class="bg-danger p-sm position-absolute bottom-0 right-0"></span>
        </div>
    </div>`);
};

export const offset = () => {
    return (`<div class="m-xxl">
        <div class="bg-light border-dark w-25 position-relative" style="height:100px;">
            <span class="bg-danger p-sm position-absolute offset-nxny top-0 left-0"></span>
            <span class="bg-danger p-sm position-absolute offset-nxny top-50 left-0"></span>
            <span class="bg-danger p-sm position-absolute offset-nxy bottom-0 left-0"></span>
            <span class="bg-danger p-sm position-absolute offset-nxny top-0 left-50"></span>
            <span class="bg-danger p-sm position-absolute offset-nxny top-50 left-50"></span>
            <span class="bg-danger p-sm position-absolute offset-nxy bottom-0 left-50"></span>
            <span class="bg-danger p-sm position-absolute offset-xny top-0 right-0"></span>
            <span class="bg-danger p-sm position-absolute offset-xny top-50 right-0"></span>
            <span class="bg-danger p-sm position-absolute offset-xy bottom-0 right-0"></span>
        </div>
    </div>`);
};

export const badgeTest = () => {
    return (`<div class="m-xxl">
        <ks-button>
            <ks-badge color="danger" class="position-absolute top-0 right-0 offset-xny">12</ks-badge>
            Test Button
        </ks-button>
    </div>`);
};
