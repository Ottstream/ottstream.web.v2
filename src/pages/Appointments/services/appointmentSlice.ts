import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';
import { createDispatchers } from '@/utils/dispatcher';

import { IAppointmentFilterSection } from '../types/types';

export const initialState: IAppointmentFilterSection = {
  isOpen: false,
  title: '',
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    openFilterSection: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title;
    },
    closeFilterSection: state => {
      state.isOpen = false;
    },
  },
});

export const { openFilterSection, closeFilterSection } =
  appointmentSlice.actions;

export const appointmentDispatcher = createDispatchers(
  appointmentSlice.actions,
);
export const appointmentSelector = (state: RootState) => state.appointment;

export default appointmentSlice.reducer;
