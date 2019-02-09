# gatsby-starter-magicsoup

The GatsbyJS Starter with our react component library soup. - Just add some water! See [demo](https://gatsby.magicsoup.io)

![magicsoup.io](https://github.com/magicsoup-io/gatsby-starter-magicsoup/raw/master/static/website-preview.jpg)

## Quick start

Use the Gatsby CLI to create a new site, specifying the default starter.

```sh
gatsby new magicsoup-starter https://github.com/magicsoup-io/gatsby-starter-magicsoup
cd magicsoup-starter && yarn && npm start 
```

## What's special about our magicsoup.io starter?

## What's included?

### 1. Optimized Images
No more large, unoptimized images which dramatically slow down your site. The starter uses [gatsby-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image) for optimized image loading.

### 2. SEO friendly
 The starter uses [react-helmet](https://github.com/nfl/react-helmet) and [gatsby-plugin-sitemap](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sitemap) to make search engines happy.

### 3. Google Webmaster Tools
Define your google *webmaster key* to confirm the ownership in Google Webmaster Tools. Choose *Meta-Tag* when the Google asks you for the confirmation method. Set the key here in `gatsby-config.js`. The starter **does not** integrate Google Analytics so if you need it [install it by yourself](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/).

### 4. Responsive UIs
This starter uses the base component library [magicsoup.io/stock](https://github.com/magicsoup-io/magicsoup-stock). magicsoup.io gives you are rapid start to create wonderful UIs with [styled-components](https://github.com/styled-components/styled-components) and [styled-system](https://github.com/jxnblk/styled-system).

### 5. Static content with JSON and Markdown
This starter is combining those benefits with GatsbyJS' automatic slug and page creation via [gatsby-transform-remark](https://www.styled-components.com/) or setting static page data with [gatsby-transform-json](https://www.styled-components.com/). 

### 6. Convert Markdown to StyledComponents
When you love `styled-components` and `styled-system` we have good news: Map your styled-components to markdown or other HTML output from a file system or any other external API. The starter uses `marksy` to map the generated HTML to custom defined `styled-components`. Not all are set, so do it by yourself under `src/templates/default-page.js`.

### 7. Web-Fonts
Every modern website or web app has a custom font. The starter uses [gatsby-plugin-web-font-loader](https://github.com/escaladesports/gatsby-plugin-web-font-loader) to load fonts from any server: Custom, Fontdeck, Fonts.com, Google, Typekit. Read more about the [webfontloader](https://github.com/typekit/webfontloader).

### 8. SSR
The starter is SSR ready. Make `npm run build` to create the production resources. Choose your favorite [deployment method](https://www.gatsbyjs.org/docs/deploying-and-hosting/) and prepare your app for production.

### 9. Testing
The starter includes everything you need to test your components with [jest](https://jestjs.io/docs/en/getting-started). Run `npm test` and see the run the first tests we have implemented.

### 10. Advanced
You want to use this starter for your next web application? Wait, here are some advanced examples:

- [gatsby-starter-sass](https://github.com/magicsoup-io/gatsby-starter-saas) - The GatsbyJS Starter Saas to build your next Saas product on gatsby! See [demo](https://gatsby-saas.magicsoup.io)
- [gatsby-starter-redux-saas](https://github.com/zauberware/gatsby-starter-redux-saas) - A Gatsby Redux Saas starter for your next Saas product. Uses react-redux, apollo-client, magicsoup.io, styled-components, styled-system. See [demo](https://gatsby-redux.zauberware.com/) 


## Author

__Script:__ <https://github.com/zauberware/gatsby-starter-redux-saas>  
__Author website:__ [https://www.zauberware.com](https://www.zauberware.com)    

![zauberware technologies](https://avatars3.githubusercontent.com/u/1753330?s=200&v=4)