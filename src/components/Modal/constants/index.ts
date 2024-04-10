import { ElementType } from 'react';

import ConfirmModal from '../components/ConfirmModal';
import AppointmentModal from '../components/AppointmentModal';
import AddUser from '@/pages/Users/AddUser/AddUser';

export enum MODALS {
  CONFIRM_MODAL = 'confirmModal',
  ADD_USER = 'addUser',
  ADD_APPOINTMENT = 'addAppoinment',
}
export type ModalList = Record<string, ElementType>;

export const modalList = {
  [MODALS.CONFIRM_MODAL]: ConfirmModal,
  [MODALS.ADD_USER]: AddUser,
  [MODALS.ADD_APPOINTMENT]: AppointmentModal,
} as ModalList;
