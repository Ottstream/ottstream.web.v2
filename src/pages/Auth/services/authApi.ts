import { baseApi } from '@/api/baseQuery';
import {
  fetchForgotPasswordType,
  fetchResetPasswordType,
  fetchSignUpTypes,
} from '@/api/types';

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    fetchSignIn: builder.mutation<{ email: string; password: string }, any>({
      query: ({ email, password }) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
    fetchSignUp: builder.mutation<fetchSignUpTypes, any>({
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
      }) => ({
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
    forgotPassword: builder.mutation<fetchForgotPasswordType, any>({
      query: ({ email }) => ({
        url: '/v1/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPassword: builder.mutation<fetchResetPasswordType, any>({
      query: ({ email, oneTimePass }) => ({
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
  useResetPasswordMutation,
} = authApi;
