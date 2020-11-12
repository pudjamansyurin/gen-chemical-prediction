export const menu = [
    { heading: "MENU" },
    {
        text: "Dashboard",
        to: "dashboard",
        icon: "mdi-currency-usd",
        roles: "*",
        bottomNav: true
    },
    {
        text: "User",
        to: "user.index",
        icon: "mdi-account-group",
        roles: ["ADMIN"],
        bottomNav: true
    },
    {
        text: "Materials",
        model: false,
        icon: "mdi-palette",
        bottomNav: true,
        children: [
            {
                text: "Material",
                to: "material.index",
                icon: "mdi-format-color-fill",
                roles: "*",
                bottomNav: true
            },
            {
                text: "Matter",
                to: "matter.index",
                icon: "mdi-spray",
                roles: "*"
            }
        ]
    }
    // {
    //     text: "Formula",
    //     to: "formula",
    //     icon: "mdi-dna",
    //     bottomNav: true
    // },
    // {
    //     text: "Packages",
    //     model: false,
    //     icon: "mdi-package",
    //     bottomNav: true,
    //     children: [
    //         {
    //             text: "Package",
    //             to: "package",
    //             icon: "mdi-package-variant-closed",
    //             bottomNav: true
    //         },
    //         {
    //             text: "Packer",
    //             to: "packer",
    //             icon: "mdi-package-variant"
    //         },
    //         {
    //             text: "Pack",
    //             to: "pack",
    //             icon: "mdi-paper-cut-vertical"
    //         }
    //     ]
    // },
    // {
    //     icon: "mdi-chart-areaspline",
    //     text: "Report",
    //     to: "report",
    //     bottomNav: true
    // },
    // { icon: "mdi-account-cog", text: "Profile", to: "profile" }
    // { icon: "mdi-cogs", text: "Setting", to: "setting" }
    //     { icon: "mdi-content-copy", text: "Duplicates" }
    // {
    //     icon: "mdi-chevron-up",
    //     "icon-alt": "mdi-chevron-down",
    //     text: "Labels",
    //     model: true,
    //     children: [{ icon: "mdi-plus", text: "Create label" }]
    // },
];
