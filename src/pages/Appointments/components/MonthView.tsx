import {
  Calendar,
  DateLocalizer,
  Navigate,
  NavigateAction,
  ViewProps,
} from 'react-big-calendar';

import { CalendarViewWrapper } from 'Pages/Appointments/styles/Appointment.styles';

import { EventComponent } from './EventComponent';
import ViewToolbar from './ViewToolbar';
import { calendarEvents } from '../constants';
import { useOpenModalHandler } from '../hooks/useOpenModalHandler';
import { useWeekFormat } from '../hooks/useWeekFormat';

export default function MonthView(
  props: Omit<ViewProps, 'date'> & { date: Date },
) {
  const {
    date,
    localizer,
    // onView,
    // onNavigate,
    // events,
  } = props;
  const currRange = MonthView.range(date, { localizer });
  const { openModalHandler, openOverviewHandler } = useOpenModalHandler();
  const { formats } = useWeekFormat();

  return (
    <CalendarViewWrapper justify="center" gap={'16px'}>
      <Calendar
        selectable
        events={calendarEvents}
        components={{
          toolbar: props => (
            <ViewToolbar {...props} color="#30E52C" name="Jenny Brown" />
          ),
          event: props => <EventComponent {...props} />,
        }}
        localizer={localizer}
        views={{
          month: true,
        }}
        formats={formats}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        date={date}
        className="month_view"
        onSelectEvent={event => openOverviewHandler(event)}
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
      />
      <Calendar
        selectable
        events={calendarEvents}
        components={{
          toolbar: props => (
            <ViewToolbar {...props} color="#5562EB" name="John Adams" />
          ),
          event: props => <EventComponent {...props} />,
        }}
        localizer={localizer}
        views={{
          month: true,
        }}
        formats={formats}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        date={date}
        className="month_view"
        onSelectEvent={event => openOverviewHandler(event)}
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
      />
    </CalendarViewWrapper>
  );
}

MonthView.range = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  const start = localizer.startOf(date, 'month');
  const end = localizer.endOf(date, 'month');

  const range = [];
  let current = start;

  while (localizer.lte(current, end, 'year')) {
    range.push(current);
    current = localizer.add(current, 1, 'month');
  }

  return range;
};

MonthView.navigate = (
  date: Date,
  action: NavigateAction,
  { localizer }: { localizer: DateLocalizer },
) => {
  switch (action) {
    case Navigate.NEXT:
      return localizer.add(date, 1, 'month');
    case Navigate.PREVIOUS:
      return localizer.add(date, -1, 'month');
    default:
      return date;
  }
};

MonthView.title = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  return localizer.format(date, 'YYYY');
};
