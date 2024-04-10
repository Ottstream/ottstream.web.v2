import { Breadcrumb, Flex } from 'antd';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useTranslation } from 'react-i18next';

import Drawer from '@/components/Drawer/Drawer';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  CustomToolbar,
  FilterByInstallers,
  FilterByMap,
  FilterByProperties,
} from './components/index';
import DayView from './Day';
import {
  appointmentDispatcher,
  appointmentSelector,
} from './services/appointmentSlice';
import { Appointments } from './styles/Appointment.styles';

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

  const FilterComponenet = componentMap[componentName] || FilterByInstallers;

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
      <Flex>
        <div className="container">
          <Calendar
            selectable
            components={{
              toolbar: CustomToolbar,
            }}
            localizer={localizer}
            views={{
              month: true,
              week: true,
              work_week: true,
              day: DayView as never,
            }}
            onDoubleClickEvent={event => console.log(3, event)}
            onSelectEvent={event => console.log(1, event)}
            onSelectSlot={event => console.log(2, event)}
            startAccessor="start"
            endAccessor="end"
          />
        </div>

        <Drawer open={isOpen} onClose={closeFilterSection} title={t(title)}>
          <FilterComponenet key={componentName} />
        </Drawer>
      </Flex>
    </Appointments>
  );
};

export default AppointmentsPage;
