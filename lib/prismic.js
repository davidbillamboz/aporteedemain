import Prismic from 'prismic-javascript';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function fetchHomePage() {
  const data = await fetchAPI(`
  {
    allHomepages {
      edges {
        node {
          keyvisual
          keyvisualmobile
          catchline
          text
        }
      }
    }
  }
  `);
  return data.allHomepages.edges[0].node;
}

export async function fetchPage(pageUid) {
  const data = await fetchAPI(`
  {
    page(uid:"${pageUid}",lang:"fr-fr") {
      title
      text
    }
  }  
  `);
  console.log(data);

  return data.page;
}

export async function fetchAllCards() {
  const data = await fetchAPI(`
  {
    allCards {
       edges {
        node {
          _meta {
            uid
            id
          }    
          image
          title
          theme
          subtitle
          text
          numbers {
            value
            text
          } 
          numberssources
          question
          commitments1 {
            text
            icon {
              ... on _ImageLink {
                url
                name
              }
            }
          }
          commitments2title
          commitments2 {
            text
            icon {
              ... on _ImageLink {
                url
                name
              }
            }
          }
          resources {
            title
            type
            link {
              ... on _ExternalLink{
                url	
              }
            }
            image
          }
        }
      } 
    }
  }
  `);
  return data.allCards.edges
    .map(({ node }) => node)
    .map(({ _meta: meta, ...props }) => {
      return {
        ...props,
        id: meta.id,
        uid: meta.uid,
      };
    });
}
