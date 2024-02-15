import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../store/store';

import { createDispatchers } from '../../../utils/dispatcher';
import { IModalState } from '../types/types';

export const initialState: IModalState = {
  modals: [],
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modals.push({
        isOpen: true,
        modalType: action.payload.modalType,
        props: action.payload.props,
      });
    },
    closeModal: (state, action) => {
      state.modals = state.modals.filter(
        modal => modal.modalType !== action.payload.modalType,
      );
    },
    updateModalProps: (state, action) => {
      state.modals = state.modals.map(modal =>
        modal.modalType === action.payload.modalType
          ? {
              ...modal,
              ...action.payload,
              props: { ...modal.props, ...action.payload.props },
            }
          : modal.props,
      );
    },
    closeTopModal: state => {
      state.modals.pop();
    },
    closeAllModals: state => {
      state.modals = [];
    },
  },
});

export const { openModal } = modalSlice.actions;

export const modalDispatcher = createDispatchers(modalSlice.actions);
export const modalSelector = createSelector(
  [(state: RootState) => state.modal],
  modal => modal,
);

export default modalSlice.reducer;
