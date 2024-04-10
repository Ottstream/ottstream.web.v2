import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import {
  BaseQueryExtraOptions,
  FetchArgs,
  fetchResetPasswordType,
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
  const result: ReturnType<typeof baseQuery> = await baseQuery(
    args,
    api,
    extraOptions,
  );
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
    ressetPassword: builder.mutation({
      query: ({ email, oneTimePass }: fetchResetPasswordType) => ({
        url: '/v2/auth/forgot/login',
        method: 'POST',
        body: { email, oneTimePass },
      }),
    }),
  }),
});
