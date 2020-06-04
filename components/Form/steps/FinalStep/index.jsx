import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faEnvelope,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Step from '../Step';
import ShareButton from './ShareButton';

const FinalStep = () => {
  const onNext = () => {
    // validate data
    return true;
  };
  return (
    <Step onNext={onNext} withoutNavigation>
      <div className="max-w-md mx-auto md:text-center">
        <h2 className="text-3xl font-bold leading-none">
          Je m’engage à partager le kit #ÀPortéeDeMain au travail
        </h2>
        <div className="font-krub font-semibold mt-8">Prêt·e à agir ?</div>
        <div>
          Téléchargez le kit #ÀPortéeDeMain, partagez-le, affichez-le,
          discutez-en et provoquez le changement autour de vous !
        </div>
        <div className="mt-6 mb-10">
          <button
            type="button"
            className="rounded-full bg-deepKoamaru hover:bg-opacity-75 text-white font-extrabold tracking-wider uppercase text-base h-16 px-4 leading-none flex items-center shadow sm:text-xl sm:h-20 sm:px-6 md:mx-auto"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="inline-block mr-2 w-8 h-auto sm:w-10"
            />
            <span className="inline-block">Télécharger le kit</span>
          </button>
        </div>
        <h2 className="text-3xl font-bold leading-none">
          J’en parle autour de moi pour faire bouger les choses
        </h2>
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

export default FinalStep;
