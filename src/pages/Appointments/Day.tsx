import { DateLocalizer, Navigate, ViewProps, Views } from 'react-big-calendar';

export default function DayView({
  date,
  localizer,
  // onView,
  // onNavigate,
  // events,
}: Omit<ViewProps, 'date'> & { date: Date }) {
  const currRange = DayView.range(date, { localizer });

  return <div>Day View</div>;
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
  action: any,
  { localizer }: { localizer: DateLocalizer },
) => {
  if (action instanceof Date) return action;

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
