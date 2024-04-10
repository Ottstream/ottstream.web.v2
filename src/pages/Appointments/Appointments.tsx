import { Breadcrumb, Flex } from 'antd';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useTranslation } from 'react-i18next';

import Drawer from '@/components/Drawer/Drawer';
import Icon from '@/components/Icon';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  CustomToolbar,
  DayView,
  FilterByInstallers,
  FilterByMap,
  FilterByProperties,
  MonthView,
  WeekView,
  WorkWeekView,
} from './components';
import { useOpenModalHandler } from './hooks/useOpenModalHandler';
import {
  appointmentDispatcher,
  appointmentSelector,
} from './services/appointmentSlice';
import { AddButton, Appointments } from './styles/Appointment.styles';

const localizer = momentLocalizer(moment);

const componentMap: { [key: string]: React.FC<any> } = {
  map: FilterByMap,
  filter: FilterByProperties,
  installers: FilterByInstallers,
};

const AppointmentsPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { closeFilterSection } = appointmentDispatcher(dispatch);
  const { isOpen, title, componentName } = useAppSelector(appointmentSelector);
  const { openModalHandler } = useOpenModalHandler();

  const FilterComponenet = componentMap[componentName] || FilterByInstallers;

  const handleOpenModal = () =>
    openModalHandler({
      start: new Date(),
      end: new Date(),
      slots: [],
      action: 'click',
    });

  return (
    <Appointments>
      <Breadcrumb
        className="breadcrumb"
        items={[
          { title: 'Home' },
          { title: 'Appointments' },
          { title: 'Calendar Events' },
        ]}
      />
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
        }}>
        <div className="container">
          <Calendar
            selectable
            components={{
              toolbar: CustomToolbar,
            }}
            localizer={localizer}
            views={
              {
                month: MonthView,
                week: WeekView,
                work_week: WorkWeekView,
                day: DayView,
              } as never
            }
          />
        </div>

        <Drawer open={isOpen} onClose={closeFilterSection} title={t(title)}>
          <FilterComponenet key={componentName} />
        </Drawer>
      </div>
      <AddButton onClick={handleOpenModal} isDrawerOpen={isOpen}>
        <Icon name="plus" size={48} />
      </AddButton>
    </Appointments>
  );
};

export default AppointmentsPage;
