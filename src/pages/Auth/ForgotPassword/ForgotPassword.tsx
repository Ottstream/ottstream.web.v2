import forgot from 'Assets/images/forgot.svg';

import { ResetPasswordSchema } from '@/schema';
import { Form, Formik } from 'formik';

import { useForgotPasswordMutation } from '@/api/baseQuery';
import Inputs from '@/components/Input/Inputs';

import { useNavigate } from 'react-router-dom';
import {
  ForgotInfoText,
  PersonalButtonNextStep,
  PersonalInformationTitle,
  WrapperInputs,
  WrapperPersonalInformation,
} from '../Styled';

interface InitialValues {
  email: string;
}

const initialValues: InitialValues = {
  email: '',
};

const ForgotPassword = () => {
  const [forgotPassword, data] = useForgotPasswordMutation();
  const navigate = useNavigate();
  const handleSubmit = (values: InitialValues) => {
    const { email } = values;
    navigate('/reset-password', { state: { email } });
    forgotPassword({ email });
  };

  return (
    <WrapperPersonalInformation>
      <PersonalInformationTitle>
        <h4 className="heading2"> Password assistance</h4>
        <img src={forgot} alt="forgot" />
      </PersonalInformationTitle>
      <ForgotInfoText>
        <h3 className="heading3">
          Enter the email address associated with your account
        </h3>
      </ForgotInfoText>

      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        {({ values, handleChange, handleBlur }) => {
          return (
            <Form>
              <WrapperInputs>
                <Inputs
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="Email Adress"
                  label="Email Address"
                />
              </WrapperInputs>

              <PersonalButtonNextStep>Continue</PersonalButtonNextStep>
            </Form>
          );
        }}
      </Formik>
    </WrapperPersonalInformation>
  );
};

export default ForgotPassword;
