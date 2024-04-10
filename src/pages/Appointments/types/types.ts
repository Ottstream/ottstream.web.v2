import {
  DateLocalizer,
  EventProps,
  Formats,
  ToolbarProps,
} from 'react-big-calendar';

export interface IAppointmentFilterSection {
  isOpen: boolean;
  title: string;
  componentName: string;
}

export enum View {
  day = 'day',
  month = 'month',
  week = 'week',
  work_week = 'work_week',
}

export type TInstallersList = {
  id: number;
  name: string;
  color: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type CalendarEvents = {
  title: string;
  allDay: boolean;
  status: string;
  start: Date;
  end: Date;
};

export type TViewToolbar = ToolbarProps &
  Partial<TInstallersList> & {
    shouldHaveMoreHeight?: boolean;
  };

export type EventStatuses =
  | 'success'
  | 'processing'
  | 'error'
  | 'default'
  | 'warning';

export type TEventComponent = EventProps & { event: CalendarEvents };

export interface CustomFormats extends Formats {
  dayFormat?: (
    date: Date,
    culture?: string,
    localizer?: DateLocalizer,
  ) => string;
  monthHeaderFormat?: (date: Date, culture?: string, localizer?: any) => string;
}
