import React, { Fragment } from 'react';
import { Checkbox } from 'antd';
import {
  StyledImage,
  StyledDivider,
  CheckboxContainer,
} from './CheckboxGroup.styles';
import { ICheckboxItemsProps } from './types';

const CheckboxItems: React.FC<ICheckboxItemsProps> = ({
  data,
  onChange,
  checkedList,
}) =>
  data.map(item => (
    <Fragment key={item.id}>
      <CheckboxContainer color={item.color}>
        <Checkbox
          value={item.id}
          checked={checkedList.includes(item.id)}
          onChange={onChange}
        />
        <StyledImage
          width={24}
          color={item.color}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" //TODO: change after react images
        />
        <span>{item.name}</span>
      </CheckboxContainer>
      <StyledDivider />
    </Fragment>
  ));
export default CheckboxItems;
