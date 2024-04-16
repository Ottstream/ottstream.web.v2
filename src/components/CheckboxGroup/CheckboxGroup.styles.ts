import { Divider } from 'antd';
import styled from 'styled-components';
import { Form } from 'formik';

export const StyledDivider = styled(Divider)`
  margin: 13px 0;
`;

export const StyedInput = styled.div`
  color: #272b2e;
  margin-bottom: 32px;
  input {
    margin-top: 8px;
  }
`;

export const CheckboxContainer = styled.div<{ color: string }>`
  width: 100%;
  label {
    margin-right: 8px;
  }
  .ant-checkbox:not(.ant-checkbox-disabled) {
    &:hover {
      .ant-checkbox-inner {
        border-color: ${props => props.color};
      }
    }
  }
  .ant-checkbox-inner {
    border-radius: 2px;
  }
  .ant-checkbox-wrapper {
    &:hover {
      .ant-checkbox:not(.ant-checkbox-disabled) {
        .ant-checkbox-inner {
          border-color: ${props => props.color};
        }
      }
      .ant-checkbox-checked:not(.ant-checkbox-disabled) {
        border-color: ${props => props.color};
        .ant-checkbox-inner {
          background-color: ${props => props.color};
          border-color: ${props => props.color};
        }
      }
    }
  }
  .ant-checkbox-indeterminate {
    .ant-checkbox-inner {
      &:after {
        background-color: ${props => props.color};
      }
    }
  }
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: ${props => props.color};
      border-color: ${props => props.color};
    }
  }
  span {
    color: #272b2e;
  }
`;

export const StyledImage = styled.img`
  border-radius: 24px;
  margin-right: 8px;
  border: 2px solid ${props => props.color};
`;
