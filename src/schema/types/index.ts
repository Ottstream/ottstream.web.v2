interface Phone {
  phoneNumber: string;
  countryCode: string;
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
  phone: Phone;
  channelAmount: number;
  clientAmount: number;
}
