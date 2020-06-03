import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cardPropType from '../../proptypes/card';
import StepsContainer from './StepsContainer';
import ChoicesStep from './steps/ChoicesStep';
import FormStep from './steps/FormStep';
import FinalStep from './steps/FinalStep';
import CardContentStep from './steps/CardContentStep';
import CardFormStep from './steps/CardFormStep';
import Wizard from './Wizard';
import ProgressBar from './ProgressBar';
import { getCardById } from './utils';

const Form = ({ cards }) => {
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

  // Build steps
  steps.push({
    Component: ChoicesStep,
    props: {
      cards,
      selectedCards: data.selectedCards,
      updateData: ({ selectedCards }) => {
        setData({
          ...data,
          selectedCards,
        });
      },
    },
  });
  data.selectedCards.forEach((cardId) => {
    const card = getCardById(cards, cardId);
    steps.push({
      Component: CardContentStep,
      props: {
        card,
      },
    });
    steps.push({
      Component: CardFormStep,
      props: {
        card,
        selectedCommitments: data.selectedCommitments[cardId],
        updateData: ({ selectedCommitments }) => {
          setData({
            ...data,
            selectedCommitments: {
              ...data.selectedCommitments,
              [cardId]: selectedCommitments,
            },
          });
        },
      },
    });
  });
  steps.push({
    Component: FormStep,
    props: {
      ...data.form,
      updateData: (newData) => {
        setData({
          ...data,
          form: { ...newData },
        });
      },
    },
  });
  steps.push({
    Component: FinalStep,
    props: {},
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
};

export default Form;
