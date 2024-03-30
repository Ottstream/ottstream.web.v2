import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';
import { createDispatchers } from '@/utils/dispatcher';

import { IAppointmentFilterSection } from '../types/types';

export const initialState: IAppointmentFilterSection = {
  isOpen: false,
  title: '',
  componentName: '',
};

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    openFilterSection: (state, action) => {
      const { title, componentName } = action.payload;
      state.isOpen = true;
      state.title = title;
      state.componentName = componentName;
    },
    closeFilterSection: state => {
      state.isOpen = false;
      state.title = '';
      state.componentName = '';
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
