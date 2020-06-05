import React from 'react';
import PropTypes from 'prop-types';
import textPropType from '../proptypes/text';
import RichText from './RichText';

const ContentPage = ({ title, text }) => (
  <>
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold leading-none mb-8">{title}</h1>
      <RichText text={text} />
    </div>
  </>
);

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  text: textPropType.isRequired,
};

export default ContentPage;
