import * as Yup from 'yup';

export const SignupSchema = [
  Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least 8 characters, 1 letter, 1 number, and 1 symbol',
      )
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  }),
  Yup.object().shape({
    companyName: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    companyEmail: Yup.string()
      .min(2, 'Too Short!')
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    website: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
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

export const initialValuesSignUp = {
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
