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

export const Estimator = {
    name: "estimator",
    form: {
        id: -1,
        name: "",
        desc: "",
        steps: null,
        ranked: null,
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
