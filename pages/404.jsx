import React from 'react';
import Head from 'next/head';
import Metadata from '../components/Metadata';
import MainButton from '../components/buttons/MainButton';

const Custom404Page = () => (
  <>
    <Metadata title="Page non trouvée" />
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold leading-none mb-8">Page non trouvée</h1>
      <div className="text-center">
        <div>La page demandée ne semble pas exister</div>
        <div className="mt-4 flex justify-center">
          <MainButton title="Retour à l'accueil" href="/" />
        </div>
      </div>
    </div>
  </>
);

Custom404Page.propTypes = {};

export default Custom404Page;
