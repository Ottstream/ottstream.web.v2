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

export default function WorkWeekView(
  props: Omit<ViewProps, 'date'> & { date: Date },
) {
  const {
    date,
    localizer,
    // onView,
    // onNavigate,
    // events,
  } = props;
  const currRange = WorkWeekView.range(date, { localizer });
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
          work_week: true,
        }}
        min={timeSlotMinValue}
        formats={formats}
        className="time-slot"
        defaultView="work_week"
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
          work_week: true,
        }}
        formats={formats}
        events={calendarEvents}
        className="week-view"
        defaultView="work_week"
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
        formats={formats}
        events={calendarEvents}
        date={date}
        localizer={localizer}
        views={{
          work_week: true,
        }}
        className="week-view"
        defaultView="work_week"
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
        onSelectEvent={event => console.log(1, event)}
      />
    </Flex>
  );
}

WorkWeekView.range = (
  date: Date,
  { localizer }: { localizer: DateLocalizer },
) => {
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

WorkWeekView.navigate = (
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

WorkWeekView.title = (
  date: Date,
  { localizer }: { localizer: DateLocalizer },
) => {
  return localizer.format(date, 'YYYY');
};
