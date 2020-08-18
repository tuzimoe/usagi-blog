module.exports = {
  siteMetadata: {
    title: `乌撒基ノサイバーパンク`,
    name: `乌撒基ノサイバーパンク`,
    siteUrl: `https://blog.tuzi.moe`,
    description: `a.k.a. 兔爺很帥・我向佛許願・三天之內必夢安魂於酒香`,
    hero: {
      heading: `搖滾精神？<br> 在屋裡<del>拉屎</del>就是搖滾精神<br><p>我向佛許願<br>三天之內必夢安魂於酒香</p>`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `乌撒基ノサイバーパンク`,
        short_name: `乌撒基`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
