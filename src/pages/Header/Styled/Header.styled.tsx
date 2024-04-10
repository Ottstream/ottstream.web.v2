import { Button } from 'antd';

import styled from 'styled-components';
export const OTTSButtonTypeTwoComponent = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(
    90deg,
    #0c99a8 8.33%,
    rgba(10, 60, 104, 0.82) 100.98%
  );
  padding: 4px 15px 4px 15px;
  gap: 10px;
  border-radius: 6px;

  &:hover {
    color: white !important;
    background: linear-gradient(
      90deg,
      #0c99a8 8.33%,
      rgba(10, 60, 104, 0.82) 100.98%
    ) !important;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  text-wrap: nowrap;
`;

export const UserFullNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserFullName = styled.h4`
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 114.286% */
letter-spacing: 1.25px;
text-transform: uppercase
color: var(--Secondary-color, #0A3C68);
text-align: right;
font-feature-settings: 'clig' off, 'liga' off;
color: var(--Secondary-color, #0A3C68);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 16px;
letter-spacing: 1.25px;
`;

export const UserPosition = styled.p`
  color: #6d6995;

  text-align: right;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const UserImageWrapper = styled.img`
  width: var(--Size-Base-sizeXXL, 48px);
  height: var(--Size-Base-sizeXXL, 48px);
  border-radius: var(--BorderRadius-borderRadius0, 48px);
  border: var(--BorderRadius-borderRadius0, 2px) solid
    var(--outline-12, rgba(0, 0, 0, 0.12));
  background: url(<path-to-image>) lightgray -45.872px -6.308px / 225.123%
    146.474% no-repeat;
  flex-shrink: 0;
`;
