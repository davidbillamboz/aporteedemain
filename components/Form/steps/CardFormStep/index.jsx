import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cardPropType from '../../../../proptypes/card';
import Step from '../Step';
import CardForm from '../../../Card/Form';

const CardFormStep = ({
  card,
  selectedCommitments: initialSelectedCommitments,
  updateData,
}) => {
  const [selectedCommitments, setSelectedCommitments] = useState(
    initialSelectedCommitments
  );

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
      <CardForm
        card={card}
        onCommitmentChange={onCommitmentChange}
        selectedCommitments={selectedCommitments}
      />
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
