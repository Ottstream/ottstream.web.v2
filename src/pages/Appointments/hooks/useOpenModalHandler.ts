import { modalDispatcher } from '@/components/Modal/services/modalSlice';
import { useAppDispatch } from '@/store/hooks';
import { SlotInfo } from 'react-big-calendar';
import { CalendarEvents } from '../types/types';

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
  const openOverviewHandler = (event: CalendarEvents) => {
    openModal({
      modalType: 'viewAppointment',
      props: {
        closeAction: () => console.log('closed'),
        event,
        footer: null,
        className: event.status,
      },
    });
  };

  return { openModalHandler, openOverviewHandler };
};
