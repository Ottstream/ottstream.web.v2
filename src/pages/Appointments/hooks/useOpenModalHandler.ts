import { modalDispatcher } from '@/components/Modal/services/modalSlice';
import { useAppDispatch } from '@/store/hooks';
import { SlotInfo } from 'react-big-calendar';

export const useOpenModalHandler = () => {
  const dispatch = useAppDispatch();
  const { openModal } = modalDispatcher(dispatch);
  const openModalHandler = (event: SlotInfo) => {
    openModal({
      modalType: 'addAppoinment',
      props: {
        closeAction: () => console.log('closed'),
        title: 'Add Event',
        okText: 'Add',
        event,
      },
    });
  };

  return { openModalHandler };
};
