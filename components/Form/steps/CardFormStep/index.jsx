import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Plus as PlusIcon } from 'react-feather';
import cardPropType from '../../../../proptypes/card';
import Step from '../Step';
import CardCommitment from './CardCommitment';
import CardResource from './CardResource';

const CardFormStep = ({
  card,
  selectedCommitments: initialSelectedCommitments,
  updateData,
}) => {
  const [selectedCommitments, setSelectedCommitments] = useState(
    initialSelectedCommitments
  );
  const [resourcesOpened, setResourcesOpened] = useState(false);

  const onCommitmentChange = (commitmentId, isSelected) => {
    const wasSelected = selectedCommitments.includes(commitmentId);
    if (isSelected && wasSelected) {
      return;
    }
    // Remove the commitment
    if (!isSelected && wasSelected) {
      const newSelectedCommitments = [...selectedCommitments];
      newSelectedCommitments.splice(
        newSelectedCommitments.indexOf(commitmentId),
        1
      );
      setSelectedCommitments(newSelectedCommitments);
      return;
    }
    // Add the commitment
    setSelectedCommitments([...selectedCommitments, commitmentId]);
  };

  const onExit = () => {
    updateData({ selectedCommitments });
    return true;
  };

  return (
    <Step onPrevious={onExit} onNext={onExit}>
      <div className="lg:flex">
        <div className="lg:w-2/5 lg:pr-4 xl:w-1/2">
          <div className="lg:sticky lg:top-0">
            <h3 className="text-2xl font-bold leading-none">
              La question à se poser
            </h3>
            <h1 className="text-chelseaCucumber text-8 font-bold leading-none mt-2">
              {card.question}
            </h1>
          </div>
        </div>
        <div className="lg:w-1/2 xl:w-1/3 lg:rounded-large lg:shadow lg:p-6">
          <h3 className="text-2xl font-bold leading-none mt-12 lg:mt-0">
            Je m’engage
          </h3>
          {card.commitments1.map((commitment, index) => (
            <CardCommitment
              key={index}
              commitment={commitment}
              checked={selectedCommitments.includes(`1-${index}`)}
              onChange={(isSelected) =>
                onCommitmentChange(`1-${index}`, isSelected)
              }
            />
          ))}
          {card.commitments2title && card.commitments2.length && (
            <>
              <h3 className="text-2xl font-bold leading-none mt-12 mb-2">
                {card.commitments2title}
              </h3>
              {card.commitments2.map((commitment, index) => (
                <CardCommitment
                  key={index}
                  commitment={commitment}
                  checked={selectedCommitments.includes(`2-${index}`)}
                  onChange={(isSelected) =>
                    onCommitmentChange(`2-${index}`, isSelected)
                  }
                />
              ))}
            </>
          )}
          {!!card.resources.length && (
            <div className="rounded-large bg-serenade mt-4 py-10 relative">
              <div className="text-2xl text-center leading-none font-bold">
                Pour aller plus loin
                <br />À lire, à voir, à écouter
              </div>
              {!resourcesOpened && (
                <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 text-center">
                  <button
                    type="button"
                    className="bg-deepKoamaru text-white w-12 h-12 text-center rounded-full hover:opacity-75"
                    onClick={() => setResourcesOpened(true)}
                  >
                    <PlusIcon className="w-6 h-auto mx-auto" />
                  </button>
                </div>
              )}
              {resourcesOpened && (
                <div className="mt-4">
                  {card.resources.map((resource, index) => (
                    <CardResource key={index} resource={resource} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Step>
  );
};

CardFormStep.propTypes = {
  card: cardPropType.isRequired,
  selectedCommitments: PropTypes.arrayOf(PropTypes.string),
  updateData: PropTypes.func.isRequired,
};

CardFormStep.defaultProps = {
  selectedCommitments: [],
};

export default CardFormStep;
