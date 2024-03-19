import { Form, Formik } from 'formik';

import Inputs from '@/components/Input/Inputs';
import newPassImg from 'Assets/images/newPass.png';

import {
  PassValidInfo,
  PersonalButtonNextStep,
  PersonalInformationTitle,
  WrapperInputs,
  WrapperInputsContainer,
  WrapperPersonalInformation,
} from '../Styled';
import { NewPasswordInitialValues } from '../types';

export default function NewPassword() {
  const initialValues: NewPasswordInitialValues = {
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values: NewPasswordInitialValues) => {
    const { password, confirmPassword } = values;
  };

  return (
    <WrapperPersonalInformation>
      <PersonalInformationTitle>
        <img src={newPassImg} alt="forgot" />
      </PersonalInformationTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={NewPassword}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        <Form>
          <WrapperInputsContainer>
            <WrapperInputs>
              <Inputs
                type="password"
                placeholder="Password"
                name="password"
                label="Password"
                showPasswordToggle
                closePasswordLength
              />
            </WrapperInputs>
            <WrapperInputs>
              <Inputs
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                label="Confirm Password"
                showPasswordToggle
              />
            </WrapperInputs>
          </WrapperInputsContainer>

          <PassValidInfo>
            <p className="smallText">
              The password must contain at least 8 characters, 1 letter, 1
              number and 1 symbol
            </p>
          </PassValidInfo>
          <PersonalButtonNextStep>Save Changes</PersonalButtonNextStep>
        </Form>
      </Formik>
    </WrapperPersonalInformation>
  );
}
