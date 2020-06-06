import Prismic from 'prismic-javascript';

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const API_TOKEN = process.env.PRISMIC_API_TOKEN;
const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

const API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
const DEFAULT_LOCALE = 'fr-fr';

export const PrismicClient = Prismic.client(API_URL, {
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
    // eslint-disable-next-line no-console
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.log(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

function contentReducer(content) {
  if (!content) {
    return null;
  }
  const {
    prismicMeta,
    metaTitle,
    metaDescription,
    metaImageSocialNetwork,
    ...props
  } = content;

  // Add only the defined metadata to let easly override with the default metadata
  // { ...defaultMetadata, ...metadata }
  const metadata = {};
  if (metaTitle) {
    metadata.title = metaTitle;
  }
  if (metaDescription) {
    metadata.description = metaDescription;
  }
  if (metaImageSocialNetwork) {
    metadata.imageSocialNetwork = metaImageSocialNetwork;
  }

  return {
    ...props,
    id: prismicMeta?.id || null,
    uid: prismicMeta?.uid || null,
    metadata,
  };
}

export async function fetchDefaultMetadata(previewData) {
  const data = await fetchAPI(
    `
  {
    allDefault_metadatas {   
      edges {
        node {
          title
          description
          imageSocialNetwork: image_social_network
          siteName: site_name
        }
      }
    }
  }
  `,
    {
      previewData,
    }
  );
  return data.allDefault_metadatas.edges[0]?.node;
}

export async function fetchHomePage(previewData) {
  const data = await fetchAPI(
    `
  {
    pages: allHomepages {   
      edges {
        node {
          metaTitle: meta_title
          metaDescription: meta_description
          metaImageSocialNetwork: meta_image_social_network    
          keyVisual: keyvisual
          keyVisualMobile: keyvisualmobile
          catchline
          text
        }
      }
    }
  }
  `,
    {
      previewData,
    }
  );
  return contentReducer(data.pages.edges[0]?.node);
}

export async function fetchEngagementPage(previewData) {
  const data = await fetchAPI(
    `
  {
    pages: allEngagement_pages {   
      edges {
        node {
          metaTitle: meta_title
          metaDescription: meta_description
          metaImageSocialNetwork: meta_image_social_network    
          introStepTitle: intro_step_title
          introStepText: intro_step_text
          formStepText: form_step_text
          finalStepTitle: final_step_title
          finalStepText: final_step_text
          finalStepTitleSocial: final_step_title_social
        }
      }
    }
  }
  `,
    {
      previewData,
    }
  );
  const {
    introStepTitle,
    introStepText,
    formStepText,
    finalStepTitle,
    finalStepText,
    finalStepTitleSocial,
    ...page
  } = contentReducer(data.pages.edges[0]?.node);

  return {
    introStep: {
      title: introStepTitle,
      text: introStepText,
    },
    formStep: {
      text: formStepText,
    },
    finalStep: {
      title: finalStepTitle,
      text: finalStepText,
      titleSocial: finalStepTitleSocial,
    },
    ...page,
  };
}

export async function fetchPage(pageUid, previewData) {
  const data = await fetchAPI(
    `
  {
    page(uid:"${pageUid}",lang:"${DEFAULT_LOCALE}") {
      prismicMeta: _meta {
        uid
        id
      }      
      metaTitle: meta_title
      metaDescription: meta_description
      metaImageSocialNetwork: meta_image_social_network        
      title
      text
    }
  }  
  `,
    {
      previewData,
    }
  );
  return contentReducer(data.page);
}

export async function fetchAllPages() {
  const data = await fetchAPI(`
  {
    pages: allPages {
       edges {
        node {
          prismicMeta: _meta {
            uid
            id
          }
          metaTitle: meta_title
          metaDescription: meta_description
          metaImageSocialNetwork: meta_image_social_network       
          title
          text
        }
      } 
    }
  }
  `);
  return data.pages.edges.map(({ node }) => node).map(contentReducer);
}

export async function fetchCard(uuid, previewData) {
  const data = await fetchAPI(
    `
  {
    card(uid:"${uuid}",lang:"${DEFAULT_LOCALE}") { 
      prismicMeta: _meta {
        uid
        id
      }        
      metaTitle: meta_title
      metaDescription: meta_description
      metaImageSocialNetwork: meta_image_social_network    
      image
      title
      theme
      subtitle
      text
      numbers {
        value
        text
      } 
      numbersSources: numberssources
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
  `,
    {
      previewData,
    }
  );

  return contentReducer(data.card);
}

export async function fetchAllCards() {
  const data = await fetchAPI(`
  {
    cards: allCards(sortBy:weight_DESC) {
       edges {
        node {
          prismicMeta: _meta {
            uid
            id
          }  
          metaTitle: meta_title
          metaDescription: meta_description
          metaImageSocialNetwork: meta_image_social_network    
          image
          title
          theme
          subtitle
          text
          numbers {
            value
            text
          } 
          numbersSources: numberssources
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
  return data.cards.edges.map(({ node }) => node).map(contentReducer);
}
