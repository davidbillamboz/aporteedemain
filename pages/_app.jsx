import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import '../styles/index.css';
import '../styles/burger.scss';

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
