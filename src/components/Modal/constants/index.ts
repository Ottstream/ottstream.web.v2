import { ElementType } from 'react';

import ConfirmModal from '../components/ConfirmModal';
import AppointmentModal from '../components/AppointmentModal';
import AppointmentOverview from '../components/AppointmentOverview';
import AddUser from '@/pages/Users/AddUser/AddUser';

export enum MODALS {
  CONFIRM_MODAL = 'confirmModal',
  ADD_USER = 'addUser',
  ADD_APPOINTMENT = 'addAppoinment',
  VIEW_APPOINTMENT = 'viewAppointment',
}
export type ModalList = Record<string, ElementType>;

export const modalList = {
  [MODALS.CONFIRM_MODAL]: ConfirmModal,
  [MODALS.ADD_USER]: AddUser,
  [MODALS.ADD_APPOINTMENT]: AppointmentModal,
  [MODALS.VIEW_APPOINTMENT]: AppointmentOverview,
} as ModalList;
