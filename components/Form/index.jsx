import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cardPropType from '../../proptypes/card';
import StepsContainer from './StepsContainer';
import IntroStep from './steps/IntroStep';
import FormStep from './steps/FormStep';
import FinalStep from './steps/FinalStep';
import CardContentStep from './steps/CardContentStep';
import CardFormStep from './steps/CardFormStep';
import Wizard from './Wizard';
import ProgressBar from './ProgressBar';
import { getCardByUid } from './utils';

const Form = ({ cards, introStep, formStep, finalStep, committerCount }) => {
  const steps = [];
  const [data, setData] = useState({
    selectedCards: [],
    selectedCommitments: {},
    form: {
      firstname: '',
      lastname: '',
      email: '',
    },
  });

  // Intro step
  steps.push({
    Component: IntroStep,
    props: {
      cards,
      ...introStep,
      selectedCards: data.selectedCards,
      updateData: ({ selectedCards }) => {
        setData({
          ...data,
          selectedCards,
        });
      },
    },
  });

  // For each cards
  data.selectedCards.forEach((cardUid) => {
    const card = getCardByUid(cards, cardUid);

    // First card step
    steps.push({
      Component: CardContentStep,
      props: {
        card,
      },
    });

    // Commitments card step
    steps.push({
      Component: CardFormStep,
      props: {
        card,
        selectedCommitments: data.selectedCommitments[cardUid],
        updateData: ({ selectedCommitments }) => {
          setData({
            ...data,
            selectedCommitments: {
              ...data.selectedCommitments,
              [cardUid]: selectedCommitments,
            },
          });
        },
      },
    });
  });

  // Form step
  steps.push({
    Component: FormStep,
    props: {
      ...data,
      cards,
      ...formStep,
      committerCount,
      updateData: (newData) => {
        setData({
          ...data,
          form: { ...newData },
        });
      },
    },
  });

  // Final step
  steps.push({
    Component: FinalStep,
    props: {
      ...finalStep,
    },
  });

  return (
    <Wizard stepCount={steps.length}>
      <ProgressBar selectedCards={data.selectedCards} cards={cards} />
      <StepsContainer steps={steps} />
    </Wizard>
  );
};

Form.propTypes = {
  cards: PropTypes.arrayOf(cardPropType).isRequired,
  introStep: PropTypes.shape({}).isRequired,
  formStep: PropTypes.shape({}).isRequired,
  finalStep: PropTypes.shape({}).isRequired,
  committerCount: PropTypes.number.isRequired,
};

export default Form;
