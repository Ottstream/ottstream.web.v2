import { ReactNode } from 'react';

export interface ISelectProps {
  label: string | ReactNode;
  required?: boolean;
  className?: string;
  name: string;
  placeholder: string;
  options: { value: string; label: string }[];
  [key: string]: any;
}
