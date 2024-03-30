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
