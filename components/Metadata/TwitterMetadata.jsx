import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const TwitterMetadata = ({
  card,
  site,
  creator,
  title,
  description,
  imageUrl,
}) => (
  <Head>
    {card && <meta name="twitter:card" content={card} />}
    {site && <meta name="twitter:site" content={site} />}
    {(creator || site) && (
      <meta name="twitter:creator" content={creator || site} />
    )}
    {title && <meta name="twitter:title" content={title} />}
    {description && <meta name="twitter:description" content={description} />}
    {imageUrl && <meta property="twitter:image" content={imageUrl} />}
  </Head>
);

TwitterMetadata.propTypes = {
  card: PropTypes.oneOf(['summary', 'summary_large_image']),
  site: PropTypes.string,
  creator: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

TwitterMetadata.defaultProps = {
  card: 'summary',
  site: null,
  title: null,
  creator: null,
  description: null,
  imageUrl: null,
};

export default TwitterMetadata;
