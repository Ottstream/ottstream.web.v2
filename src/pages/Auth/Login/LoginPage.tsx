import { useFetchSignInMutation } from '@/api/baseQuery';
import Inputs from '@/components/Input/Inputs';
import { SignInSchema } from '@/schema';
import hello from 'Assets/images/hello.svg';
import { Checkbox } from 'antd';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { valuesType } from '.';
import {
  CheckboxContainerSignIn,
  PersonalButtonNextStep,
  PersonalInformationForms,
  PersonalInformationIconContainer,
  PersonalInformationTitle,
  WrapperPersonlInformation,
} from '../Components';
import styles from './index.module.css';

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

const LoginPage = () => {
  const [fetchSignIn, data] = useFetchSignInMutation();

  const handleSubmit = (values: valuesType) => {
    const { email, password } = values;

    fetchSignIn({ email, password });
  };

  return (
    <WrapperPersonlInformation>
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
          {({ values, errors, handleChange, touched, handleBlur }) => {
            return (
              <Form>
                <Inputs
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="User Name"
                  label="User Name"
                  // style={touched.email && { marginBottom: 0 }}
                />
                {/* {touched.email && <div className={'error'}>{errors.email}</div>} */}

                <Inputs
                  type="password"
                  value={values.password}
                  name="password"
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="Password"
                  label="Password"
                  // style={touched.password && { marginBottom: 0 }}
                />
                {/* {touched.password && (
                  <div className={'error'}>{errors.password}</div>
                )} */}

                <CheckboxContainerSignIn>
                  <Checkbox
                    name="rememberMe"
                    onChange={handleChange('rememberMe')}>
                    Remember me
                  </Checkbox>

                  <Link to="/reset-password" className={styles.forgotPassword}>
                    Forgot Password ?
                  </Link>
                </CheckboxContainerSignIn>

                <PersonalButtonNextStep>Sign in</PersonalButtonNextStep>
              </Form>
            );
          }}
        </Formik>
      </PersonalInformationForms>
    </WrapperPersonlInformation>
  );
};

export default LoginPage;
