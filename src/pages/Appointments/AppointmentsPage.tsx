import moment from 'moment';
import { Breadcrumb } from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import { Appointments } from './Appointment.styles';
import CustomToolbar from './Toolbar/Toolbar';
import DayView from './Day';

const localizer = momentLocalizer(moment);

const AppointmentsPage = () => {
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
          // onDoubleClickEvent={() => alert(7)}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </Appointments>
  );
};

export default AppointmentsPage;
