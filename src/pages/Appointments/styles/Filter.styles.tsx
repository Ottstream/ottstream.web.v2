import { Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  .smallText {
    font-size: 14px;
    display: flex;
    align-items: center;
    svg path {
      stroke: #878787;
      stroke-width: 1;
    }
  }
  > div {
    margin-bottom: 24px;
    .ant-select,
    .ant-input {
      margin-top: 8px;
      width: 100%;
    }
  }
`;
