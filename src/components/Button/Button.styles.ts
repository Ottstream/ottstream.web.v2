// import { Button, ButtonProps } from 'antd'; //TODO: change to ant Button
import styled from 'styled-components';

export const Gradient = styled.button`
  display: flex;
  width: 100%;
  padding: 4px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid var(--mine-gradient, #0c99a8);
  background: var(
    --mine-gradient,
    linear-gradient(90deg, #0c99a8 8.33%, rgba(10, 60, 104, 0.82) 100.98%)
  );
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
  color: white;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-top: 32px;
  &.resetPassBtn {
    max-width: 96px;
    margin-left: auto;
    margin-right: auto;
  }
`;
