import { ReactNode } from 'react';

import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import styled from 'styled-components';

type SelectProps = AntSelectProps & {
  prefixIcon?: ReactNode;
  title?: string;
};

const Select = ({ title, prefixIcon, children, ...rest }: SelectProps) => {
  return (
    <>
      <SelectWrapper>
        {title && <h5>{title}</h5>}
        <SelectContainer>
          {prefixIcon && (
            <div className="prefix-icon-wrapper">{prefixIcon}</div>
          )}
          <AntSelect {...rest}>{children}</AntSelect>
        </SelectContainer>
      </SelectWrapper>
    </>
  );
};

const SelectWrapper = styled.div`
  width: 100%;
  margin: 10px 0;

  h5 {
    color: #272b2e;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
`;

const SelectContainer = styled.div`
  position: relative;

  .prefix-icon-wrapper {
    position: absolute;
    z-index: 1;
    width: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  && .ant-select .ant-select-selector {
    padding-left: calc(3rem - 8px);
  }
`;

export default Select;
