import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import OgMetadata from './OgMetadata';
import TwitterMetadata from './TwitterMetadata';

const Metadata = ({
  title,
  description,
  imageSocialNetwork,
  url,
  siteName,
  twitterUsername,
}) => {
  // Generate image url with ratio 1.91:1 and > 1 200 × 630
  const width = 1200;
  const height = 630;
  const imageUrl =
    (imageSocialNetwork &&
      `${imageSocialNetwork.url}&w=${width}&h=${height}&fit=clip`) ||
    null;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
        />
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
      </Head>
      <OgMetadata
        siteName={siteName}
        type="website"
        title={title}
        description={description}
        url={url}
        imageUrl={imageUrl}
      />
      <TwitterMetadata
        card="summary_large_image"
        site={twitterUsername}
        title={title}
        description={description}
        imageUrl={imageUrl}
      />
    </>
  );
};

Metadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSocialNetwork: PropTypes.shape({
    url: PropTypes.string.isRequired,
    dimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    alt: PropTypes.string,
  }),
  url: PropTypes.string,
  siteName: PropTypes.string,
  twitterUsername: PropTypes.string,
};

Metadata.defaultProps = {
  title: null,
  description: null,
  imageSocialNetwork: null,
  url: null,
  siteName: null,
  twitterUsername: null,
};

export default Metadata;
