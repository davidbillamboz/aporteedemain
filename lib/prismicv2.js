import Prismic from 'prismic-javascript';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const API_TOKEN = process.env.PRISMIC_API_TOKEN;
const DEFAULT_LOCALE = 'fr-fr';

const API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;

export const api = Prismic.client(API_URL, {
  accessToken: API_TOKEN,
});

export async function getSingle({ contentType, previewData }) {
  const { data } = await api.getSingle(contentType, {
    lang: DEFAULT_LOCALE,
    ref: previewData?.ref,
  });
  return data;
}
