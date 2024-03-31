import React, { Fragment, useRef, useState } from 'react';
import { Checkbox, Input, Typography } from 'antd';
import type { CheckboxProps } from 'antd';
import { InputRef } from 'antd/lib/input/Input';
import { useTranslation } from 'react-i18next';
import CheckboxItems from './CheckboxItems';
import {
  CheckboxContainer,
  StyedInput,
  StyledDivider,
} from './CheckboxGroup.styles';
import { ICheckboxGroupProps } from './types';

const CheckboxGroup: React.FC<ICheckboxGroupProps> = ({
  data,
  checkAllColor = '#01B2B8',
  checkAllText = '',
}) => {
  const { t } = useTranslation();
  const inputRef = useRef<InputRef | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const [debouncedValue, setDebouncedValue] = useState('');
  const [checkedList, setCheckedList] = useState<number[]>([]);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(debouncedValue),
  );
  const indeterminate =
    !!checkedList.length && checkedList.length < filteredData.length;

  const checkAll =
    !!checkedList.length && checkedList.length === filteredData.length;

  const handleInputChange = () => {
    if (inputRef.current) {
      const value = inputRef.current?.input?.value!;
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
      debounceTimeout.current = setTimeout(() => {
        setDebouncedValue(value);
      }, 500);
    }
  };

  const onItemChange: CheckboxProps['onChange'] = event => {
    const { value } = event.target;
    const list = checkedList.includes(value)
      ? checkedList.filter(id => id != value)
      : [...checkedList, value];
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps['onChange'] = e => {
    const { checked } = e.target;
    setCheckedList(checked ? data.map(item => item.id) : []);
  };

  return (
    <Fragment>
      <CheckboxContainer color={checkAllColor}>
        <Checkbox
          onChange={onCheckAllChange}
          indeterminate={indeterminate}
          checked={checkAll}
        />
        <span>{t(checkAllText)}</span>
      </CheckboxContainer>
      <StyledDivider />

      <StyedInput>
        <Typography.Text>{t('search')}</Typography.Text>
        <Input
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="search"
        />
      </StyedInput>
      <CheckboxItems
        data={filteredData}
        onChange={onItemChange}
        checkedList={checkedList}
      />
    </Fragment>
  );
};
export default CheckboxGroup;
