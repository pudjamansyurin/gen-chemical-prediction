export const Role = {
    id: -1,
    name: ""
};

export const User = {
    name: "user",
    form: {
        id: -1,
        name: "",
        email: "",
        role_id: -1,
        role: Role,
        password: "",
        password_confirmation: "",
        change_password: null,
        authorized: null
    }
};

export const Matter = {
    name: "matter",
    form: {
        id: -1,
        name: "",
        required: null,
        authorized: null
    }
};

export const Material = {
    name: "material",
    form: {
        id: -1,
        name: "",
        matter_id: -1,
        authorized: null
    }
};

export const Measurement = {
    name: "measurement",
    form: {
        id: -1,
        name: "",
        primary: null,
        authorized: null
    }
};

export const Formula = {
    name: "formula",
    form: {
        id: -1,
        name: "",
        note: "",
        materials: [],
        measurements: [],
        authorized: null
    }
};

// export const Pack = {
//     id: -1,
//     name: "",
//     packer_id: -1
// };

// export const Packer = {
//     id: -1,
//     name: "",
//     packs: []
// };

// export const Package = {
//     id: -1,
//     name: "",
//     unit_id: -1,
//     capacity: null,
//     _packers: []
// };

// export const MaterialRev = {
//     id: -1,
//     price: 0,
//     updated_at: null
// };

// export const Sale = {
//     id: -1,
//     name: "",
//     filled: null,
//     rev: {
//         price: null
//     },
//     _products: [
//         {
//             package: null,
//             formula: null,
//             ratio: 1
//         }
//     ]
// };
