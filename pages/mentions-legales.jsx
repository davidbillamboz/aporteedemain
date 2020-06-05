import React from 'react';
import { fetchPage } from '../lib/prismic';
import ContentPage from '../components/ContentPage';

const LegalPage = (props) => <ContentPage {...props} />;

export async function getStaticProps() {
  const data = await fetchPage('legal');

  return {
    props: {
      title: data.title,
      text: data.text,
    },
    unstable_revalidate: 5,
  };
}

export default LegalPage;
