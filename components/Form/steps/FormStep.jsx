import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import textPropType from '../../../proptypes/text';
import fetchJson from '../../../lib/fetchJson';
import Input from '../../Input';
import RichText from '../../RichText';
import Checkbox from '../../Checkbox';
import { Context } from '../Wizard';
import Navigation from '../Navigation';
import Step from './Step';

const FormStep = ({
  text,
  form,
  selectedCommitments,
  updateData,
  committerCount,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError] = useState(null);
  const { loadNextStep } = useContext(Context);
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setError,
    control,
  } = useForm({
    defaultValues: {
      privacy: false,
      newsletter: false,
      ...form,
    },
  });
  const isValid = !errors || !errors.length;
  const hasPrivacyError = Boolean(errors && errors.privacy);

  const handleError = (err) => {
    switch (err) {
      case 'INVALID_EMAIL':
        setError('email', {
          type: 'manual',
          message: 'Veuillez vérifier votre email',
        });
        break;
      case 'UNKNOWN':
      default:
        setGlobalError('Une erreur inconnue est survenue');
    }
  };

  const onSubmit = async (data) => {
    setGlobalError(null);
    if (isLoading) {
      return;
    }

    try {
      setIsLoading(true);

      const result = await fetchJson('/api/commit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          commitments: selectedCommitments,
        }),
      });

      setIsLoading(false);

      if (!result.success) {
        handleError(result.error);
        return;
      }

      loadNextStep();
    } catch (err) {
      setIsLoading(false);
      handleError(err);
    }
  };

  const onPrevious = () => {
    const data = getValues();
    updateData(data);
    return true;
  };

  return (
    <Step>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold leading-none">
            Je m’engage avec les {committerCount} autres
          </h2>
          <div className="mt-8">
            <RichText text={text} />
          </div>
          <div className="mt-8">
            <div className="mb-4 relative">
              <Input
                placeholder="Prénom"
                name="firstname"
                register={register({ required: true })}
                error={errors && errors.firstname}
              />
            </div>
            <div className="mb-4 relative">
              <Input
                placeholder="Nom"
                name="lastname"
                register={register({ required: true })}
                error={errors && errors.lastname}
              />
            </div>
            <div className="mb-4 relative">
              <Input
                type="email"
                name="email"
                placeholder="Adresse email"
                register={register({ required: true })}
                error={errors && errors.email}
              />
            </div>
            <div className="mt-4 flex">
              <Controller
                control={control}
                name="newsletter"
                render={({ onChange, value, name }) => (
                  <div
                    className="flex cursor-default"
                    onClick={() => onChange(!value)}
                  >
                    <Checkbox checked={value} id="newsletter" name={name} />
                    <span className="ml-4">
                      Je souhaite recevoir les actualités du projet
                    </span>
                  </div>
                )}
              />
            </div>
            <div className="mt-4 flex">
              <Controller
                control={control}
                name="privacy"
                render={({ onChange, value, name }) => (
                  <div
                    className="flex cursor-default"
                    onClick={() => onChange(!value)}
                  >
                    <Checkbox
                      checked={value}
                      id="privacy"
                      name={name}
                      error={hasPrivacyError}
                    />
                    <span
                      className={`ml-4 ${
                        hasPrivacyError ? 'text-red-500' : ''
                      }`}
                    >
                      J’accepte{' '}
                      <NextLink
                        href="/[slug]"
                        as="/politique-de-confidentialite"
                      >
                        <a className="underline" target="_blank" rel="noopener">
                          la politique de confidentialité
                        </a>
                      </NextLink>
                    </span>
                  </div>
                )}
                rules={{ validate: (value) => value }}
              />
            </div>
            {globalError && (
              <div className="text-red-500 mt-4 text-center">{globalError}</div>
            )}
          </div>
        </div>
        <Navigation
          onPrevious={onPrevious}
          isSubmit
          nextEnabled={isValid && !isLoading}
        />
      </form>
    </Step>
  );
};

FormStep.propTypes = {
  text: textPropType.isRequired,
  form: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  selectedCommitments: PropTypes.shape({}).isRequired,
  updateData: PropTypes.func.isRequired,
  committerCount: PropTypes.number.isRequired,
};

export default FormStep;
