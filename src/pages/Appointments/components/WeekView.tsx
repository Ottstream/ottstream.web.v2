import {
  Calendar,
  DateLocalizer,
  Navigate,
  NavigateAction,
  ViewProps,
} from 'react-big-calendar';
import { Flex } from 'antd';
import ViewToolbar from './ViewToolbar';
import { EventComponent } from './EventComponent';
import { calendarEvents, timeSlotMinValue } from '../constants';
import { useOpenModalHandler } from '../hooks/useOpenModalHandler';
import { useWeekFormat } from '../hooks/useWeekFormat';

export default function WeekView(
  props: Omit<ViewProps, 'date'> & { date: Date },
) {
  const {
    date,
    localizer,
    // onView,
    // onNavigate,
    // events,
  } = props;
  const currRange = WeekView.range(date, { localizer });
  const { openModalHandler } = useOpenModalHandler();
  const { formats } = useWeekFormat();

  return (
    <Flex justify="center" gap={'16px'}>
      <Calendar
        components={{
          toolbar: props => <ViewToolbar {...props} />,
        }}
        localizer={localizer}
        views={{
          week: true,
        }}
        formats={formats}
        min={timeSlotMinValue}
        className="time-slot"
        defaultView="week"
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
          week: true,
        }}
        events={calendarEvents}
        className="week-view"
        defaultView="week"
        formats={formats}
        date={date}
        onSelectEvent={event => console.log(1, event)}
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
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
          week: true,
        }}
        formats={formats}
        className="week-view"
        defaultView="week"
        onSelectEvent={event => console.log(1, event)}
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
      />
    </Flex>
  );
}

WeekView.range = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  const start = date;
  const end = localizer.add(start, 2, 'week');

  let current = start;
  const range = [];

  while (localizer.lte(current, end, 'week')) {
    range.push(current);
    current = localizer.add(current, 1, 'week');
  }

  return range;
};

WeekView.navigate = (
  date: Date,
  action: NavigateAction,
  { localizer }: { localizer: DateLocalizer },
) => {
  switch (action) {
    case Navigate.NEXT:
      return localizer.add(date, 1, 'week');
    case Navigate.PREVIOUS:
      return localizer.add(date, -1, 'week');
    default:
      return date;
  }
};

WeekView.title = (date: Date, { localizer }: { localizer: DateLocalizer }) => {
  return localizer.format(date, 'YYYY');
};
