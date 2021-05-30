module.exports = {
  siteMetadata: {
    title: `Eleanor Sofia Walker`,
    shortTitle: `esw`,
    titleTemplate: '%s | Eleanor Sofia Walker',
    description:
      'I’m Eleanor, a curious handweaver & textile artist. I create handwoven pieces for the home, always made with natural materials and designed to feel good.',
    url: 'https://www.elsofia.co.uk',
    siteUrl: 'https://www.elsofia.co.uk',
    image: '/img/home.jpg',
    instagramUsername: '@eleanorsofia_',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/img/`,
      },
      __key: `uploads`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
      __key: `content`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        cmsConfig: `/static/admin/config.yml`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 90,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Eleanor Sofia Walker`,
        short_name: `El Sofia`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
