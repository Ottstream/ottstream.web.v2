export interface ISelectProps {
  label: string;
  name: string;
  placeholder: string;
  options: { value: string; label: string }[];
  [key: string]: any;
}
