import * as Yup from 'yup';
import { InitialValuesSignUp } from './types';

export const SignupSchema = [
  Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    email: Yup.string()
      .min(2, 'Too Short')
      .max(65, 'Must be 65 characters or less')
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,16}$/,
        'Password must contain at least 8 characters,one uppercase letter, one lowercase letter, one number, one special character (symbol)',
      )
      .min(8, 'Must be 8 characters')
      .max(16, 'Must be 16 characters or less')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password must match')
      .required('Confirm password is required'),
  }),
  Yup.object().shape({
    companyName: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Must be 30 characters or less')
      .required('Required'),

    companyEmail: Yup.string()
      .min(2, 'Too Short')
      .max(65, 'Must be 65 characters or less')
      .email('Email is invalid')
      .required('Email is required'),
    website: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    description: Yup.string()
      .required('Required')
      .min(2, 'Too Short')
      .max(5000, 'Must be 5000 characters or less'),
    phone: Yup.object().shape({
      phoneNumber: Yup.string().required('Required'),
      countryCode: Yup.string().required('Required'),
    }),
    channelAmount: Yup.number().required('Required'),
    clientAmount: Yup.number().required('Required'),
  }),
];
export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
  password: Yup.string().required(),
  rememberMe: Yup.boolean().oneOf(
    [true, false],
    'Please accept the terms and conditions',
  ),
});

export const initialValuesSignUp: InitialValuesSignUp = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  description: '',
  companyEmail: '',
  website: '',
  phone: {
    phoneNumber: '',
    countryCode: '',
  },
  channelAmount: 0,
  clientAmount: 0,
};

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
});

export const VerifyOTPSchema = Yup.object().shape({
  otp: Yup.string().required(),
});
