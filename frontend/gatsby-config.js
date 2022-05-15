require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.albanlorillard.fr",
    title: "Alban Lorillard",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        singleTypes: [
          {
            singularName: "home",
            queryParams: {
                  populate: "*",
            },
          }
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
  ]
};
