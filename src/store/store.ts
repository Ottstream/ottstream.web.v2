import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { baseApi } from '../api/baseQuery';
import modalReducer from '../components/Modal/services/modalSlice';
import appointmentReducer from 'Pages/Appointments/services/appointmentSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    appointment: appointmentReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware,
    ),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
