import { SelectOption, TInstallersList } from '../types/types';

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
