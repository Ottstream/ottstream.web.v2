export type FetchArgs = {
  url: string;
  method?:
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | 'TRACE'
    | 'PATCH';
  body?: any;
  headers?: HeadersInit;
  redirect?: RequestRedirect;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  integrity?: string;
  keepalive?: boolean;
  signal?: AbortSignal | null;
  window?: any;
};

export type BaseQueryExtraOptions = {
  signal?: AbortSignal;
};

export interface fetchSignUpTypes {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  channel: number;
  client: number;
  company: [lang: string, name: string];
  description: string;
  companyEmail: string;
  website: string;
  phone: {
    countryCode: string;
    phoneNumber: string;
  };
}

export interface fetchSignInType {
  email: string;
  password: string;
}

export interface fetchForgotPasswordType {
  email: string;
}

export interface fetchResetPasswordType {
  email: string;
  oneTimePass: string;
}
