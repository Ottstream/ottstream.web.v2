import styled from 'styled-components';

export const Appointments = styled.div`
  background: #fff;
  .breadcrumb {
    margin-top: 8px;
    padding: 8px 16px;
    border-radius: 2px;
    box-shadow: 4px 0px 6px 0px rgba(10, 60, 104, 0.25);
  }
  .container {
    margin: 24px;
    border-radius: 7px;
    border: 1px solid #dee6ec;
    border-radius: 7px;
    margin-bottom: 30px;
    .rbc-calendar {
      height: calc(100vh - 150px);
    }
  }
`;

export const Toolbar = styled.div`
  .actions {
    padding-top: 4px;
    padding-right: 24px;
    .badge {
      sup {
        background: rgba(127, 216, 219, 0.15);
        color: #0c99a8;
      }
    }
    .ant-btn {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .ant-btn-default:hover {
      color: #0c99a8;
      border-color: #0c99a8;
      // svg path {
      //     stroke: #0C99A8
      // }
    }
  }
  .picker {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 24px;
    .ant-picker {
      border: none;
      cursor: pointer;
      padding: 0;
      input {
        display: none;
      }
    }
    span {
      color: #01b2b8;
      font-weight: 600;
    }
  }
  .ant-divider {
    margin-top: 4px;
    margin-bottom: 0px;
  }
  .views {
    padding: 12px 24px;
    .ant-radio-button-wrapper {
      &:hover {
        span {
          color: #01b2b8;
        }
      }
    }
    .ant-radio-button-wrapper-checked {
      color: #01b2b8;
      border-color: #01b2b8;
      &:not(.ant-radio-button-wrapper-disabled)::before {
        background-color: #01b2b8;
      }
    }
  }
`;
