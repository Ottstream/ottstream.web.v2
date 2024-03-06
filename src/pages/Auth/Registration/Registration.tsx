import { useState } from 'react';

import { Formik } from 'formik';

import { initialValuesSignUp, SignupSchema } from '@/schema';

import {
  PersonalButtonNextStep,
  WrapperPersonlInformation,
} from '../Components';
import RegistrationCompanyInformation from './RegistrationCompanyInformation/RegistrationCompanyInformation';
import RegistrationPersonaInformation from './RegistrationPersonalInformation/RegistrationPersonaInformation';
import Thanks from './Thanks/Thanks';
import { useFetchSignUpMutation } from '@/api/baseQuery';

const steps = ['Personal Information', 'Company Information', 'Thank You'];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <RegistrationPersonaInformation />;
    case 1:
      return <RegistrationCompanyInformation />;
    case 2:
      return <Thanks />;
    default:
      return <div>Not Found</div>;
  }
}

export default function Registration() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = SignupSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const [fetchSignUp, data] = useFetchSignUpMutation();

  const handleBack = () => {
    setActiveStep(step => step - 1);
  };

  function handleSubmit(values, actions) {
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
      const channel = Number(channelAmount);
      const client = Number(clientAmount);
      const company = [
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
    <WrapperPersonlInformation>
      <Formik
        initialValues={initialValuesSignUp}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={currentValidationSchema}>
        {({ isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {_renderStepContent(activeStep)}
            <div className="">
              {activeStep !== 0 && <button onClick={handleBack}>Back</button>}
              <div className="">
                <PersonalButtonNextStep disabled={isSubmitting} type="submit">
                  {isLastStep ? 'Sign Up' : 'Next'}
                </PersonalButtonNextStep>
                {isSubmitting && (
                  <p>loading</p>
                  // <CircularProgress
                  //   size={24}
                  //   className={classes.buttonProgress}
                  // />
                )}
              </div>
            </div>
          </form>
        )}
      </Formik>
    </WrapperPersonlInformation>
  );
}
