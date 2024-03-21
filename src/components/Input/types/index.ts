export interface inputsWithLabelProps {
  labelTitle?: string;
  placeholderText: string;
  inputValue: string | number;
  onChange: () => void;
}

export interface InputsProps {
  label: string;
  showPasswordToggle?: boolean;
  closePasswordLength?: boolean;
}
