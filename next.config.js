const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([[optimizedImages, {}]], {
  env: {
    PRISMIC_API_TOKEN: process.env.APORTEDEMAIN_PRISMIC_API_TOKEN,
    PRISMIC_REPOSITORY_NAME: process.env.APORTEDEMAIN_PRISMIC_REPOSITORY_NAME,
    PRISMIC_REPOSITORY_LOCALE:
      process.env.APORTEDEMAIN_PRISMIC_REPOSITORY_LOCALE,
  },
});
