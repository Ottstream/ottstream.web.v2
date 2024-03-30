import { ElementType } from 'react';

import ProvidersModal from '@/components/Modal/components/ProvidersModal';
import AddUser from '@/pages/Users/AddUser/AddUser';

import ConfirmModal from '../components/ConfirmModal';

export enum MODALS {
  CONFIRM_MODAL = 'confirmModal',
  ADD_USER = 'addUser',
  PROVIDERS = 'providers',
}
export type ModalList = Record<string, ElementType>;

export const modalList = {
  [MODALS.CONFIRM_MODAL]: ConfirmModal,
  [MODALS.ADD_USER]: AddUser,
  [MODALS.PROVIDERS]: ProvidersModal,
} as ModalList;
