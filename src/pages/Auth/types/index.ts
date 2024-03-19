export interface LoginInitialValuesType {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginValuesType {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface InitialValuesSignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  description: string;
  companyEmail: string;
  website: string;
  phone: string;
  channelAmount: number;
  clientAmount: number;
}

export interface RegistrationFormValuesTypes {
  channelAmount: number;
  clientAmount: number;
  companyEmail: string;
  companyName: string;
  confirmPassword: string;
  description: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phoneNumber?: number;
  phone: {
    phoneNumber: string;
    countryCode: string;
  };
  website: string;
}

// interface FormValues {
//     firstname: string;
//     lastname: string;
//     email: string;
//     password: string;
//     channelAmount: string;
//     clientAmount: string;
//     companyName?: string;
//     description: string;
//     companyEmail: string;
//     website: string;
//     phone: {
//       countryCode: string;
//       phoneNumber: string;
//     };
//   }

export interface FormikActions {
  setTouched: (touched: { [field: string]: boolean }) => void;
  setSubmitting: (isSubmitting: boolean) => void;
}

export interface RessetPasswordResponseType {
  token: string;
}

export interface NewPasswordInitialValues {
  password: string;
  confirmPassword: string;
}
