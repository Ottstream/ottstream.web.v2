export interface IAppointmentFilterSection {
  isOpen: boolean;
  title: string;
}

export enum View {
  day = 'day',
  month = 'month',
  week = 'week',
  work_week = 'work_week',
}
