import React from 'react';
import PropTypes from 'prop-types';
import { fetchHomePage, fetchDefaultMetadata } from '../lib/prismic';
import metadataPropType from '../proptypes/metadata';
import imagePropType from '../proptypes/image';
import textPropType from '../proptypes/text';
import Metadata from '../components/Metadata';
import RichTech from '../components/RichText';
import MainButton from '../components/buttons/MainButton';
import { getStats } from './api/stats';

const IndexPage = ({ metadata, page, committerCount }) => (
  <>
    <Metadata {...metadata} />
    <div className="relative aspect-ratio-square sm:aspect-ratio-kvWide">
      <picture className="absolute top-0 left-0">
        <source
          media="(max-width: 639px)"
          srcSet={`${page.keyVisualMobile.url}&w=320 320w,${page.keyVisualMobile.url}&w=640 640w,${page.keyVisualMobile.url}&w=750 750w,${page.keyVisualMobile.url}&w=1000 1000w,${page.keyVisualMobile.url}&w=1240 1240w`}
        />
        <source
          media="(min-width: 640px)"
          srcSet={`${page.keyVisual.url}&w=1200 1200w,${page.keyVisual.url}&w=1500 1500w,${page.keyVisual.url}&w=2000 2000w,${page.keyVisual.url}&w=2500 2500w,${page.keyVisual.url}&w=3000 3000w`}
        />
        <img
          src={`${page.keyVisual.url}&w=1000`}
          alt={page.keyVisual.alt || ''}
        />
      </picture>
    </div>
    <div className="relative -mt-4 px-4 pb-8 md:-mt-16 lg:-mt-32">
      <div className="shadow px-4 py-6 text-center rounded-large bg-white max-w-md mx-auto">
        <h1 className="uppercase text-5xl font-bold leading-none font-krub lg:text-6xl">
          À Portée
          <br />
          de Main
        </h1>
        <h2 className="text-2xl font-bold leading-none mt-6 md:text-3xl lg:text-4xl">
          {page.catchline}
        </h2>
        <div className="mt-8">
          <RichTech text={page.text} />
        </div>
        <div className="mt-6 flex justify-center">
          <MainButton title="Découvrez" href="/engagement" />
        </div>
        <div className="mt-2">Déjà {committerCount} engagé·e·s</div>
      </div>
    </div>
  </>
);

IndexPage.propTypes = {
  metadata: metadataPropType.isRequired,
  page: PropTypes.shape({
    keyVisual: imagePropType.isRequired,
    keyVisualMobile: imagePropType.isRequired,
    catchline: PropTypes.string.isRequired,
    text: textPropType.isRequired,
  }).isRequired,
  committerCount: PropTypes.number.isRequired,
};

export async function getStaticProps({ preview = false, previewData }) {
  const { metadata: pageMetadata, ...page } = await fetchHomePage(previewData);
  const defaultMetadata = await fetchDefaultMetadata(previewData);
  const url = `${process.env.BASE_URL}/`;
  const metadata = { ...defaultMetadata, ...pageMetadata, url };
  const stats = await getStats();
  return {
    props: {
      preview,
      metadata,
      page,
      committerCount: stats.committers || 0,
    },
    unstable_revalidate: 5,
  };
}

export default IndexPage;
