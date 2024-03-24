import { ElementType } from 'react';

import ConfirmModal from '../components/ConfirmModal';

export enum MODALS {
  CONFIRM_MODAL = 'confirmModal',
}
export type ModalList = Record<string, ElementType>;

export const modalList = {
  [MODALS.CONFIRM_MODAL]: ConfirmModal,
} as ModalList;
