import { MODALS } from '../constants';

export type ModalProps = {
  closeAction: () => void;
  [key: string]: any;
};
export interface IModal {
  isOpen: boolean;
  modalType: MODALS | null;
  props: ModalProps;
}
export interface IModalState {
  modals: Array<IModal>;
}
