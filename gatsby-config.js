module.exports = {
    siteMetadata: {
        title: "Brian Koehler",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/data`,
            },
            __key: "data",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: `${__dirname}/data/projects`,
            },
            __key: "projects",
        }
    ],
};
