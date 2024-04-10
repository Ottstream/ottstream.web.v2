import { useEffect, useRef, useState } from 'react';

import { Button, Flex } from 'antd';
import { Form, Formik } from 'formik';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Inputs from '@/components/Input/Inputs';
import { VerifyOTPSchema } from '@/schema';
import reset from 'Assets/images/reset.svg';

import {
  useForgotPasswordMutation,
  useRessetPasswordMutation,
} from '../services/authApi';
import {
  BorderBottomLine,
  PersonalButtonNextStep,
  ResendButton,
  WrapperInputs,
  WrapperPersonalInformation,
  WrapperResendEmail,
  WrapperResetPasswordDescription,
} from '../Styled';

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

  const [ressetPassword, data] = useRessetPasswordMutation();
  const [forgotPassword, dateForgot] = useForgotPasswordMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => prevTimer - 1);
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

  const handleResendEmail = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { state } = useLocation();
    if (state !== null) {
      const { email } = state;
      forgotPassword({ email });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTimer(prevTimer => (prevTimer = 5));
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

              {values.otp.length > 0 && (
                <PersonalButtonNextStep className="resetPassBtn">
                  Sumbit
                </PersonalButtonNextStep>
              )}
            </Form>
          );
        }}
      </Formik>
      <BorderBottomLine />

      <WrapperResendEmail>
        <Link to="/login" className="smallText" style={{ color: '#000' }}>
          Return to Log In
        </Link>
        {timer === 0 && (
          <ResendButton className="smallText" onClick={handleResendEmail}>
            Resend the email
          </ResendButton>
        )}
      </WrapperResendEmail>
    </WrapperPersonalInformation>
  );
};

export default ResetPasswords;
