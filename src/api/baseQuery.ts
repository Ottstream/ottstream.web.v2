import {
  BaseQueryApi,
  BaseQueryFn,
  QueryReturnValue,
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import {
  BaseQueryExtraOptions,
  FetchArgs,
  fetchForgotPasswordType,
  fetchResetPasswordType,
  fetchSignInType,
  fetchSignUpTypes,
} from './types';

const baseUrl = 'https://panelapidev.ottstream.live';
export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async headers => {
    const token = localStorage.getItem('token');

    if (token) {
      headers.set('token', token);
    }

    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions,
) => {
  const result: QueryReturnValue<
    unknown,
    FetchBaseQueryError,
    FetchBaseQueryMeta
  > = await baseQuery(args, api, extraOptions);
  if (
    result?.error?.status === 'FETCH_ERROR' ||
    result?.error?.status === 500
  ) {
    api.dispatch(console.log('error'));
  }
  if (result?.error?.status === 401) {
    console.log('error');
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({
    fetchSignIn: builder.mutation({
      query: ({ email, password }: fetchSignInType) => ({
        url: '/v1/auth/login',
        method: 'POST',

        body: {
          email,
          password,
        },
      }),
    }),
    fetchSignUp: builder.mutation({
      query: ({
        firstname,
        lastname,
        email,
        password,
        channel,
        client,
        company,
        description,
        companyEmail,
        website,
        phone,
      }: fetchSignUpTypes) => ({
        url: '/v1/auth/register-user-provider',
        method: 'POST',
        body: {
          firstname,
          lastname,
          email,
          password,
          channelAmount: channel,
          clientAmount: client,
          companyName: company,
          description,
          companyEmail,
          website,
          phone,
        },
      }),
    }),
    forgotPassword: builder.mutation({
      query: ({ email }: fetchForgotPasswordType) => ({
        url: '/v1/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    ressetPassword: builder.mutation({
      query: ({ email, oneTimePass }: fetchResetPasswordType) => ({
        url: '/v2/auth/forgot/login',
        method: 'POST',
        body: { email, oneTimePass },
      }),
    }),
  }),
});

export const {
  useFetchSignInMutation,
  useFetchSignUpMutation,
  useForgotPasswordMutation,
  useRessetPasswordMutation,
} = baseApi;
