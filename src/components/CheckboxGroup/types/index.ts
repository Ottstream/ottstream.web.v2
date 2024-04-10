import { CheckboxChangeEvent } from 'antd/es/checkbox';

type Data = {
  id: number;
  name: string;
  color: string;
};

export interface ICheckboxGroupProps {
  data: Data[];
  checkAllColor?: string;
  checkAllText?: string;
}

export interface ICheckboxItemsProps {
  data: Data[];
  onChange: (e: CheckboxChangeEvent) => void;
  checkedList: number[];
}
