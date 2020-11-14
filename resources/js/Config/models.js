export const Role = {
    id: -1,
    name: ""
};

export const User = {
    id: -1,
    name: "",
    email: "",
    role_id: -1,
    password: "",
    password_confirmation: "",
    change_password: null,
    role: Role,
    authorized: false
};

export const Matter = {
    id: -1,
    name: "",
    required: null,
    authorized: false
};

export const Material = {
    id: -1,
    name: "",
    matter_id: -1,
    authorized: false
};

export const Measurement = {
    id: -1,
    name: "",
    required: null,
    authorized: false
};

export const Formula = {
    id: -1,
    name: "",
    note: "",
    materials: [],
    measurements: [],
    authorized: false
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
