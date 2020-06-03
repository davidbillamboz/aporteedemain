import React from 'react';
import { BookOpen as BookOpenIcon, Mic as MicIcon } from 'react-feather';
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
  }

  return (
    <div className="border-solid border-b border-gray border-opacity-25 py-6 last:border-b-0">
      <div className="px-2 mb-2 cursor-default">
        {resource.type === 'read' && <></>}
        <TypeIcon className="inline-block w-6 h-auto" />
        <span className="inline-block ml-2 uppercase text-micro">
          {typeTitle}
        </span>
      </div>
      <a
        href={resource.link.url}
        target="_blank"
        rel="noreferrer"
        className="group"
      >
        {resource.image && (
          <div className="group-hover:opacity-75">
            <img
              src={resource.image.url}
              alt={resource.image.alt}
              className="w-full h-auto"
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
