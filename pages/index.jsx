import React from 'react';
import PropTypes from 'prop-types';
import imagePropType from '../proptypes/image';
import textPropType from '../proptypes/text';
import { fetchHomePage } from '../lib/prismic';
import RichTech from '../components/RichText';
import MainButton from '../components/buttons/MainButton';

const IndexPage = ({ keyVisual, keyVisualMobile, catchline, text }) => (
  <>
    <div className="relative aspect-ratio-kvSquare sm:aspect-ratio-kvWide">
      <picture className="absolute top-0 left-0">
        <source
          media="(max-width: 639px)"
          srcSet={`${keyVisualMobile.url}&w=320 320w,${keyVisualMobile.url}&w=640 640w,${keyVisualMobile.url}&w=750 750w,${keyVisualMobile.url}&w=1000 1000w,${keyVisualMobile.url}&w=1240 1240w`}
        />
        <source
          media="(min-width: 640px)"
          srcSet={`${keyVisual.url}&w=1200 1200w,${keyVisual.url}&w=1500 1500w,${keyVisual.url}&w=2000 2000w,${keyVisual.url}&w=2500 2500w,${keyVisual.url}&w=3000 3000w`}
        />
        <img src={`${keyVisual.url}&w=1000`} alt={keyVisual.alt || ''} />
      </picture>
    </div>
    <div className="relative -mt-8 px-4 pb-8 md:-mt-16 lg:-mt-32">
      <div className="shadow px-4 py-6 text-center rounded-large bg-white max-w-md mx-auto">
        <h1 className="uppercase text-5xl font-bold leading-none font-krub lg:text-6xl">
          À Portée
          <br />
          de Main
        </h1>
        <h2 className="text-2xl font-bold leading-none mt-6 md:text-3xl lg:text-4xl">
          {catchline}
        </h2>
        <div className="mt-8">
          <RichTech text={text} />
        </div>
        <div className="mt-6 flex justify-center">
          <MainButton title="Découvrez" href="/form" />
        </div>
        <div className="mt-2">Déjà 1285 engagé·e·s</div>
      </div>
    </div>
  </>
);

IndexPage.propTypes = {
  keyVisual: imagePropType.isRequired,
  keyVisualMobile: imagePropType.isRequired,
  catchline: PropTypes.string.isRequired,
  text: textPropType.isRequired,
};

export async function getStaticProps() {
  const homePage = await fetchHomePage();
  return {
    props: {
      keyVisual: homePage.keyvisual,
      keyVisualMobile: homePage.keyvisualmobile,
      catchline: homePage.catchline,
      text: homePage.text,
    },
    unstable_revalidate: 5,
  };
}

export default IndexPage;
