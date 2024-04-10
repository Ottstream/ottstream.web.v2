import styled from 'styled-components';

export const AddAppointment = styled.div`
  .divider {
    margin-top: 12px;
  }
`;

export const TimeContainer = styled.div`
  text-align: center;
  position: relative;
  .select-date {
    position: absolute;
    left: 0;
    border: none;
    padding: 0;
    input {
      display: none;
    }
  }
  h4 {
    color: #0a3c68;
  }
  span {
    color: #012f57;
  }
`;

export const FormContainer = styled.div`
  margin-top: 32px;
  .right-side,
  .left-side {
    min-width: 540px;
    .address {
      width: 100%;
      label h5 {
        font-size: 14px;
      }
      input {
        margin-top: 8px;
      }
    }
    .price {
      input {
        margin-top: 8px;
        width: 100px;
      }
    }
    .comment {
      h5 {
        font-size: 14px;
        font-weight: normal;
      }
    }
    .select {
      height: 86px;
      width: 100%;
      display: flex;
      gap: 8px;
      flex-direction: column;
      label {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
`;
