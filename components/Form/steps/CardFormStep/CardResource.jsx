import React from 'react';
import {
  BookOpen as BookOpenIcon,
  Mic as MicIcon,
  Video as VideoIcon,
} from 'react-feather';
import { resource as resourcePropType } from '../../../../proptypes/card';

const CardResource = ({ resource }) => {
  let TypeIcon;
  let typeTitle;
  if (resource.type === 'read') {
    TypeIcon = BookOpenIcon;
    typeTitle = 'Lire';
  } else if (resource.type === 'listen') {
    TypeIcon = MicIcon;
    typeTitle = 'Écouter';
  } else if (resource.type === 'see') {
    TypeIcon = VideoIcon;
    typeTitle = 'Voir';
  }

  return (
    <div className="border-solid border-b border-gray border-opacity-25 py-6 last:border-b-0">
      {resource.type && (
        <div className="px-2 mb-2 cursor-default">
          <TypeIcon className="inline-block w-6 h-auto" />
          <span className="inline-block ml-2 uppercase text-micro">
            {typeTitle}
          </span>
        </div>
      )}
      <a
        href={(resource.link && resource.link.url) || ''}
        target="_blank"
        rel="noreferrer"
        className="group"
      >
        {resource.image && resource.image.url && (
          <div className="group-hover:opacity-75 aspect-ratio-16/9 relative">
            <img
              src={resource.image.url}
              alt={resource.image.alt}
              className="w-full absolute top-0 left-0"
            />
          </div>
        )}
        <div className="text-xl font-semibold leading-none py-4 px-2 group-hover:underline">
          {resource.title}
        </div>
      </a>
    </div>
  );
};

CardResource.propTypes = {
  resource: resourcePropType.isRequired,
};

export default CardResource;
