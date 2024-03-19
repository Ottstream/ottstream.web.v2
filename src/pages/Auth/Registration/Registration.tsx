import { useState } from 'react';

import { Formik } from 'formik';

import { initialValuesSignUp, SignupSchema } from '@/schema';

import RegistrationCompanyInformation from './RegistrationCompanyInformation/RegistrationCompanyInformation';
import RegistrationPersonaInformation from './RegistrationPersonalInformation/RegistrationPersonaInformation';

import { useFetchSignUpMutation } from '@/api/baseQuery';
import ArrowLeftIcon from '@/components/Icon/Icon';
import { InitialValuesSignUp } from '@/schema/types';
import {
  CompanyInformationWrapper,
  PersonalButtonNextStep,
  WrapperPersonalInformation,
} from '../Styled';
import { FormikActions } from '../types';
const steps = ['Personal Information', 'Company Information'];

function _renderStepContent(step: number) {
  switch (step) {
    case 0:
      return <RegistrationPersonaInformation />;
    case 1:
      return (
        <CompanyInformationWrapper>
          <RegistrationCompanyInformation />
        </CompanyInformationWrapper>
      );

    default:
      return <div>Not Found</div>;
  }
}

export default function Registration() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentValidationSchema = SignupSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const [fetchSignUp] = useFetchSignUpMutation();

  const handleBack = () => {
    setActiveStep((step: number) => step - 1);
  };

  function handleSubmit(values: InitialValuesSignUp, actions: FormikActions) {
    if (isLastStep) {
      const {
        firstname,
        lastname,
        email,
        password,
        channelAmount,
        clientAmount,
        companyName,
        description,
        companyEmail,
        website,
        phone,
      } = values;
      const channel: number = Number(channelAmount);
      const client: number = Number(clientAmount);

      const company: any = [
        {
          lang: 'en',
          name: companyName,
        },
      ];
      fetchSignUp({
        firstname,
        lastname,
        email,
        password,
        channel,
        client,
        company,
        description,
        companyEmail,
        website,
        phone,
      });
    } else {
      setActiveStep(prev => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  return (
    <WrapperPersonalInformation>
      <Formik
        initialValues={initialValuesSignUp}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={currentValidationSchema}>
        {({ isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {activeStep === 0 && (
              <>
                <RegistrationPersonaInformation />
                <PersonalButtonNextStep disabled={isSubmitting} type="submit">
                  Next
                </PersonalButtonNextStep>
              </>
            )}
            {activeStep === 1 && (
              <CompanyInformationWrapper>
                <RegistrationCompanyInformation />
                <button onClick={handleBack} className='backStep'>
                  <ArrowLeftIcon/>
                </button>
                <PersonalButtonNextStep disabled={isSubmitting} type="submit">
                  Sign Up
                </PersonalButtonNextStep>
              </CompanyInformationWrapper>
            )}
          </form>
        )}
      </Formik>
    </WrapperPersonalInformation>
  );
}
