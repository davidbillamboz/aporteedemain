import React from 'react';
import { fetchPage } from '../lib/prismic';
import ContentPage from '../components/ContentPage';

const ManifestoPage = (props) => <ContentPage {...props} />;

export async function getStaticProps() {
  const data = await fetchPage('manifesto');

  return {
    props: {
      title: data.title,
      text: data.text,
    },
    unstable_revalidate: 5,
  };
}

export default ManifestoPage;
