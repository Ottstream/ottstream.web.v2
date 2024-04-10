import { SelectOption, TInstallersList, CalendarEvents } from '../types/types';

export const installers: TInstallersList[] = [
  {
    id: 1,
    name: 'Thor',
    color: '#f00',
  },
  {
    id: 2,
    name: 'Loki',
    color: 'purple',
  },
  {
    id: 3,
    name: 'Iron Man',
    color: 'green',
  },
  {
    id: 4,
    name: 'Hulk',
    color: 'yellow',
  },
  {
    id: 5,
    name: 'Spider Man',
    color: 'blue',
  },
];

export const typeOptions: SelectOption[] = [
  { value: 'new_connection', label: 'New Connection' },
  { value: 'technical', label: 'Technical' },
];

export const paymentOptions: SelectOption[] = [
  { value: 'paid', label: 'Paid' },
  { value: 'unpaid', label: 'Unpaid' },
  { value: 'pending', label: 'Pending' },
  { value: 'free', label: 'Free' },
];

export const statusOptions: SelectOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'process', label: 'Process' },
  { value: 'completed', label: 'Completed' },
  { value: 'cancelled', label: 'Cancelled' },
];

export const calendarEvents: CalendarEvents[] = [
  {
    title: 'Title',
    allDay: false,
    status: 'Process',
    start: new Date(Date.parse('2024-04-08 03:00')),
    end: new Date(Date.parse('2024-04-08 04:00')),
  },
  {
    title: 'Title',
    allDay: false,
    status: 'Active',
    start: new Date(Date.parse('2024-04-08 06:00')),
    end: new Date(Date.parse('2024-04-08 07:00')),
  },
  {
    title: 'Title',
    allDay: false,
    status: 'Completed',
    start: new Date(Date.parse('2024-04-09 06:00')),
    end: new Date(Date.parse('2024-04-09 07:00')),
  },
  {
    title: 'Title',
    allDay: false,
    status: 'Canceled',
    start: new Date(Date.parse('2024-04-09 03:00')),
    end: new Date(Date.parse('2024-04-09 04:00')),
  },
];

export const eventStatuses: { [key: string]: string } = {
  Completed: 'success',
  Canceled: 'error',
  Process: 'warning',
  Active: 'processing',
  Default: 'default',
};
const today = new Date();
export const timeSlotMinValue = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate(),
  1,
);
