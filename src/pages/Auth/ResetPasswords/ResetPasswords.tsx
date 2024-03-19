import reset from 'Assets/images/reset.svg';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PersonalButtonNextStep,
  WrapperInputs,
  WrapperPersonalInformation,
  WrapperResetPasswordDescription,
} from '../Styled';

import { Form, Formik } from 'formik';

import { useRessetPasswordMutation } from '@/api/baseQuery';
import Inputs from '@/components/Input/Inputs';
import { VerifyOTPSchema } from '@/schema';

interface InitialValues {
  otp: string;
}

const initialValues: InitialValues = {
  otp: '',
};

const ResetPasswords = () => {
  const emailRef = useRef<string>('');

  function checkEmail() {
    const { state } = useLocation();
    if (state === null) {
      return '';
    } else {
      const { email } = state;
      emailRef.current = email ?? '';
      return email;
    }
  }
  const [timer, setTimer] = useState(6);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const [ressetPassword, data] = useRessetPasswordMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
        setTimeoutReached(true);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);
  const handleSubmit = (value: InitialValues) => {
    const { otp } = value;
    ressetPassword({ email: emailRef.current, oneTimePass: otp });
    const token = data.data;

    if (token) {
      navigate('/new-password');
    }
  };

  return (
    <WrapperPersonalInformation>
      <img src={reset} alt="img" />
      <WrapperResetPasswordDescription>
        <span className="heading3 title">
          We sent OTP to
          <span className="heading3 email"> {checkEmail()}</span>, for resetting
          the password, enter OTP here, or click on a 'Reset password' button
          from the emailed message.
        </span>
      </WrapperResetPasswordDescription>
      <h3 className="heading3 timer">{timer}</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={VerifyOTPSchema}
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
                  name="otp"
                  value={values.otp}
                  onChange={handleChange('otp')}
                  onBlur={handleBlur('otp')}
                  placeholder="One time Password"
                  label="Enter OTP"
                />
              </WrapperInputs>

              <PersonalButtonNextStep className='resetPassBtn'>Sumbit</PersonalButtonNextStep>
            </Form>
          );
        }}
      </Formik>
    </WrapperPersonalInformation>
  );
};

export default ResetPasswords;
