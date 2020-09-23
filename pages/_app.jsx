import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout';
import '../styles/index.css';
import '../styles/burger.scss';

// Do not auto add Font Awesome css
config.autoAddCss = false;

// Track page view
Router.events.on('routeChangeComplete', (url) => {
  if (!window.gtag) {
    return;
  }
  setTimeout(() => {
    window.gtag(
      'config',
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID,
      {
        page_location: url,
        page_title: document.title,
      }
    );
  }, 0);
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
