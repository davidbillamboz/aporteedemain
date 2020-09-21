import React from 'react';
import PropTypes from 'prop-types';
import textPropType from '../../../proptypes/text';
import Input from '../../Input';
import RichText from '../../RichText';
import Step from './Step';

const FormStep = ({ text, firstname, lastname, email, updateData }) => {
  const onNext = () => {
    // validate data
    // updateData()
    return true;
  };
  return (
    <Step onNext={onNext} isValid>
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold leading-none">
          Je m’engage avec les 9500 autres
        </h2>
        <p className="mt-8">
          <RichText text={text} />
        </p>
        <div className="mt-8">
          <div className="mb-4 relative">
            <Input placeholder="Prénom" />
          </div>
          <div className="mb-4 relative">
            <Input placeholder="Nom" />
          </div>
          <div className="mb-4 relative">
            <Input type="email" placeholder="Adresse email" />
          </div>
          <div className="text-micro font-krub uppercase px-4 leading-tight">
            Promis pas de pub, on vous tient juste au courant pour la suite du
            projet
          </div>
        </div>
      </div>
    </Step>
  );
};

FormStep.propTypes = {
  text: textPropType.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default FormStep;
