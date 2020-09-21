module.exports = {
  env: {
    FACEBOOK_PAGE_URL: 'http://facebook.com/aporteedemain',
    TWITTER_NICKNAME: 'aporteedemain',
    INSTAGRAM_USERNAME: 'aporteedemain',
    BASE_URL: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost',
    PRISMIC_API_TOKEN: process.env.APORTEDEMAIN_PRISMIC_API_TOKEN,
    PRISMIC_REPOSITORY_NAME: process.env.APORTEDEMAIN_PRISMIC_REPOSITORY_NAME,
    PRISMIC_REPOSITORY_LOCALE:
      process.env.APORTEDEMAIN_PRISMIC_REPOSITORY_LOCALE,
  },
}
