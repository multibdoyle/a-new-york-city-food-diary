module.exports = {
    siteMetadata: {
      title: `A New York City Diary`,
      description: `Eating, earning and burning through New York City '21`,
      author: `A New York City Diary`,
      siteUrl: `https://github.com/multibdoyle?tab=repositories`,
      social: {
        twitter: ``,
        facebook: ``,
        github: `multibdoyle`,
        linkedin: `brendan-doyle-403ba028/`,
        email: `bdoyle.core@gmail.com`,
      },
    },
    
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/blog`,
          name: `blog`,
        },
      },
      {
      
                resolve: `gatsby-plugin-disqus`,
                options: {
                    shortname: `newyorkcitydiary`
                }
        
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/content/assets`,
          name: `assets`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 970,
            withWebp: true,
            withAvif: true,
              },
            },
            {
              resolve: `gatsby-remark-katex`,
              options: {
                strict: `warn`,
              },
            },
            {
              resolve: `gatsby-remark-copy-linked-files`,
              options: {
                destinationDir: `files`,
                ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
              },
            },
            `gatsby-remark-prismjs`,
          ],
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
       //uncomment this and input the trackingId to enable google analytics
      {
       resolve: `gatsby-plugin-google-analytics`,
       options: {
       trackingId: `UA-169387969-1`,
       },
       },
       {
        resolve: `gatsby-plugin-google-adsense`,
        options: {
          publisherId: `ca-pub-4361545941367587`
        },
      },
      `gatsby-plugin-feed`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `flexible-gatsby-starter`,
          short_name: `flexible-gatsby`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `./static/skeleton_praying.png`, // This path is relative to the root of the site.
        },
      },
      // `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
    ],
  }
  