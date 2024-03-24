import moment from 'moment';
import { Breadcrumb, Flex } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { Appointments } from './Appointment.styles';
import CustomToolbar from './components/Toolbar';
import DayView from './Day';
import Drawer from '@/components/Drawer/Drawer';
// import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  appointmentDispatcher,
  appointmentSelector,
} from './services/appointmentSlice';
import { useTranslation } from 'react-i18next';
const localizer = momentLocalizer(moment);

const AppointmentsPage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { closeFilterSection } = appointmentDispatcher(dispatch);
  const { isOpen, title } = useAppSelector(appointmentSelector);
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
            onDoubleClickEvent={() => console.log('onDoubleClickEvent')}
            startAccessor="start"
            endAccessor="end"
          />
        </div>

        <Drawer
          open={isOpen}
          onClose={() => closeFilterSection()}
          title={t(title)}>
          <div>{title}</div>
        </Drawer>
      </Flex>
    </Appointments>
  );
};

export default AppointmentsPage;
