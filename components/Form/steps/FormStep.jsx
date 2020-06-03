import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import Step from './Step';

const FormStep = ({ firstname, lastname, email, updateData }) => {
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
          Pour comptabiliser vos engagement, et{' '}
          <b>recevoir par email l’affiche et les fiches récap</b>, nous avons
          besoin de quelques informations..{' '}
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
            Promis pas de pub, on vous tiens juste au courant pour la suite du
            projet
          </div>
        </div>
      </div>
    </Step>
  );
};

FormStep.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default FormStep;
