import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEnvelope,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import textPropType from '../../../../proptypes/text';
import RichText from '../../../RichText';
import Step from '../Step';
import ShareButton from './ShareButton';

const FinalStep = ({ title, text, button, titleSocial }) => {
  return (
    <Step>
      <div className="max-w-md mx-auto md:text-center">
        <h2 className="text-3xl font-bold leading-none">{title}</h2>
        <div className="mt-8">
          <RichText text={text} />
        </div>
        <div className="mt-6 mb-10">
          <a href="/api/kit" download>
            <button
              type="button"
              className="rounded-full bg-deepKoamaru hover:bg-opacity-75 text-white font-extrabold tracking-wider uppercase text-base h-16 px-4 leading-none flex items-center shadow sm:text-xl sm:h-20 sm:px-6 md:mx-auto"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="inline-block mr-2 w-8 h-auto sm:w-10"
              />
              <span className="inline-block">{button.title}</span>
            </button>
          </a>
        </div>
        <h2 className="text-3xl font-bold leading-none">{titleSocial}</h2>
        <div className="flex justify-between mt-10 max-w-xs mx-auto">
          <ShareButton icon={faFacebookF} />
          <ShareButton icon={faTwitter} />
          <ShareButton icon={faEnvelope} />
          <ShareButton icon={faLink} />
        </div>
      </div>
    </Step>
  );
};

FinalStep.propTypes = {
  title: PropTypes.string.isRequired,
  text: textPropType.isRequired,
  button: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  titleSocial: PropTypes.string.isRequired,
};

export default FinalStep;
