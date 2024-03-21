import { ElementType } from 'react';

import ConfirmModal from '../components/ConfirmModal';
import AddUser from '@/pages/Users/AddUser/AddUser';

export enum MODALS {
  CONFIRM_MODAL = 'confirmModal',
  ADD_USER = 'addUser',
}
export type ModalList = Record<string, ElementType>;

export const modalList = {
  [MODALS.CONFIRM_MODAL]: ConfirmModal,
  [MODALS.ADD_USER]: AddUser,
} as ModalList;
