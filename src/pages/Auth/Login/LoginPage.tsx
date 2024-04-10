import { SignInSchema } from '@/schema';
import hello from 'Assets/images/hello.svg';
import { Checkbox } from 'antd';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import Inputs from '@/components/Input/Inputs';
import {
  CheckboxContainerSignIn,
  PersonalButtonNextStep,
  PersonalInformationForms,
  PersonalInformationIconContainer,
  PersonalInformationTitle,
  WrapperInputs,
  WrapperInputsContainer,
  WrapperPersonalInformation,
} from '../Styled';
import { LoginInitialValuesType, LoginValuesType } from '../types';
import styles from './index.module.css';
import { useFetchSignInMutation } from '../services/authApi';

const initialValues: LoginInitialValuesType = {
  email: '',
  password: '',
  rememberMe: false,
};

const LoginPage = () => {
  const [fetchSignIn, data] = useFetchSignInMutation();

  const handleSubmit = (values: LoginValuesType) => {
    const { email, password } = values;

    fetchSignIn({ email, password });
  };

  return (
    <WrapperPersonalInformation>
      <PersonalInformationTitle>
        <h4 className="heading1"> Sign In</h4>
      </PersonalInformationTitle>
      <PersonalInformationForms>
        <PersonalInformationIconContainer>
          <h4 className="heading2"> Hello </h4>
          <img src={hello} alt="hello" />
        </PersonalInformationIconContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}>
          {({ values, handleChange, handleBlur }) => {
            return (
              <Form>
                <WrapperInputsContainer>
                  <WrapperInputs>
                    <Inputs
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder="Username"
                      label="Username"
                    />
                  </WrapperInputs>
                  <WrapperInputs>
                    <Inputs
                      type="password"
                      value={values.password}
                      name="password"
                      onChange={handleChange('password')}
                      onBlur={handleBlur('password')}
                      placeholder="Password"
                      label="Password"
                      showPasswordToggle
                    />
                  </WrapperInputs>
                </WrapperInputsContainer>

                <CheckboxContainerSignIn>
                  <Checkbox
                    name="rememberMe"
                    onChange={() => handleChange('rememberMe')}>
                    Remember me
                  </Checkbox>

                  <Link to="/forgot-password" className={styles.forgotPassword}>
                    Forgot Password ?
                  </Link>
                </CheckboxContainerSignIn>
                <PersonalButtonNextStep>Sign in</PersonalButtonNextStep>
              </Form>
            );
          }}
        </Formik>
      </PersonalInformationForms>
      <PersonalInformationIconContainer className="footer">
        <p> No account? </p>
        <Link to="/registration"> Sign Up</Link>
      </PersonalInformationIconContainer>
    </WrapperPersonalInformation>
  );
};

export default LoginPage;
