import {
  Calendar,
  DateLocalizer,
  Navigate,
  NavigateAction,
  ViewProps,
} from 'react-big-calendar';
import { Flex } from 'antd';
import ViewToolbar from './ViewToolbar';
import { calendarEvents } from '../constants';
import { EventComponent } from './EventComponent';
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
  const { openModalHandler } = useOpenModalHandler();
  const { formats } = useWeekFormat();

  return (
    <Flex justify="center" gap={'16px'}>
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
        // onSelectEvent={event => console.log('onSelectEvent', event)}
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
        }}
        date={date}
        localizer={localizer}
        views={{
          month: true,
        }}
        formats={formats}
        className="month_view"
        defaultView="month"
        onSelectEvent={event => console.log(1, event)}
        onSelectSlot={event =>
          event.action === 'doubleClick' ? openModalHandler(event) : {}
        }
        startAccessor="start"
        endAccessor="end"
      />
    </Flex>
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
