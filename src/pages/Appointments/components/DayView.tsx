import {
  Calendar,
  DateLocalizer,
  Navigate,
  NavigateAction,
  ViewProps,
  Views,
} from 'react-big-calendar';

import { CalendarViewWrapper } from 'Pages/Appointments/styles/Appointment.styles';

import { EventComponent } from './EventComponent';
import ViewToolbar from './ViewToolbar';
import { calendarEvents, timeSlotMinValue } from '../constants';
import { useOpenModalHandler } from '../hooks/useOpenModalHandler';
import { useWeekFormat } from '../hooks/useWeekFormat';

export default function DayView({
  date,
  localizer,
  // onView,
  // onNavigate,
  // events,
}: Omit<ViewProps, 'date'> & { date: Date }) {
  const currRange = DayView.range(date, { localizer });
  const { openModalHandler } = useOpenModalHandler();
  const { formats } = useWeekFormat();

  return (
    <CalendarViewWrapper justify="center" gap={'16px'}>
      <Calendar
        selectable
        components={{
          toolbar: props => <ViewToolbar {...props} />,
        }}
        localizer={localizer}
        views={{
          day: true,
        }}
        formats={formats}
        min={timeSlotMinValue}
        className="time-slot__day"
        defaultView="day"
        date={date}
      />
      <Calendar
        selectable
        components={{
          toolbar: props => (
            <ViewToolbar {...props} color="#30E52C" name="Jenny Brown" />
          ),
          event: props => <EventComponent {...props} />,
        }}
        localizer={localizer}
        views={{
          day: true,
        }}
        events={calendarEvents}
        className="day-view"
        defaultView="day"
        date={date}
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
        onSelectEvent={event => console.log(1, event)}
      />
      <Calendar
        selectable
        components={{
          toolbar: props => (
            <ViewToolbar {...props} color="#5562EB" name="John Adams" />
          ),
          event: props => <EventComponent {...props} />,
        }}
        events={calendarEvents}
        date={date}
        localizer={localizer}
        views={{
          day: true,
        }}
        className="day-view"
        defaultView="day"
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
        onSelectEvent={event => console.log(1, event)}
      />
    </CalendarViewWrapper>
  );
}

DayView.range = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  const start = localizer.startOf(date, 'day');
  const end = localizer.endOf(date, 'day');

  const range = [];
  let current = start;

  while (localizer.lte(current, end, 'year')) {
    range.push(current);
    current = localizer.add(current, 1, 'month');
  }

  return range;
};

DayView.navigate = (
  date: Date,
  action: NavigateAction,
  { localizer }: { localizer: DateLocalizer },
) => {
  // if (action instanceof Date) return action;

  switch (action) {
    case Navigate.NEXT:
      return localizer.add(date, 1, 'day');
    case Navigate.PREVIOUS:
      return localizer.add(date, -1, 'day');
    default:
      return date;
  }
};

DayView.title = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  return localizer.format(date, 'YYYY');
};
