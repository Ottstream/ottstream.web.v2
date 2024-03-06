import React from 'react';
import forgot from 'Assets/images/forgot.svg';
import Inputs from '@/components/Input/Inputs';
import { ResetPasswordSchema } from '@/schema';
import { Form, Formik } from 'formik';
import {
  PersonalButtonNextStep,
  PersonalInformationTitle,
  WrapperPersonlInformation,
} from '../Components';
import { useFetchRessetPasswordMutation } from '@/api/baseQuery';

const initialValues = {
  email: '',
};

const ResetPassword = () => {
  const [fetchRessetPassword, data] = useFetchRessetPasswordMutation();
  const handleSubmit = values => {
    const { email } = values;
    fetchRessetPassword({ email });
  };

  return (
    <WrapperPersonlInformation>
      <PersonalInformationTitle>
        <h4 className="heading1"> Password assistance</h4>
        <img src={forgot} alt="forgot" />
      </PersonalInformationTitle>
      <h4 className="heading3">
        Enter the email address associated with your account
      </h4>
      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        {({ values, errors, handleChange, touched, handleBlur }) => {
          return (
            <Form>
              <Inputs
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email Adress"
                label="Email Address"
              />

              <PersonalButtonNextStep>Continue</PersonalButtonNextStep>
            </Form>
          );
        }}
      </Formik>
    </WrapperPersonlInformation>
  );
};

export default ResetPassword;
