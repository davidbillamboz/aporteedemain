import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const OgMetadata = ({ siteName, type, title, description, url, imageUrl }) => (
  <Head>
    {siteName && <meta property="og:site_name" content={siteName} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {url && <meta property="og:url" content={url} />}
    {imageUrl && <meta property="og:image" content={imageUrl} />}
  </Head>
);

OgMetadata.propTypes = {
  siteName: PropTypes.string,
  type: PropTypes.oneOf(['website', 'article']),
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
};

OgMetadata.defaultProps = {
  siteName: null,
  type: 'website',
  title: null,
  description: null,
  url: null,
  imageUrl: null,
};

export default OgMetadata;
