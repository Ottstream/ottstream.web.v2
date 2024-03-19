import React from 'react';

import {
  BulbTwoTone,
  CameraOutlined,
  DownOutlined,
  MessageOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import styled from 'styled-components';

import CustomBadge from 'Pages/Chat/Components/CustomBadge';

const ButtonRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

const CustomButton = styled(Button)<{ isActive: boolean }>`
  border-radius: 25px; /* Adjusted button border radius */
  background-color: ${({ isActive }) => (isActive ? '#01B2B8' : 'transparent')};
  color: ${({ isActive }) => (isActive ? 'white' : 'inherit')};
  border: none;
  padding: 0 10px;
  margin: 0 3px;
`;

const LeftButtonsContainer = styled.div`
  display: flex;
  flex: 1;
`;

const RightButtonsContainer = styled.div``;

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const ButtonRow: React.FC = () => {
  const [activeButton, setActiveButton] = React.useState<string>('all');

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  return (
    <ButtonRowContainer>
      <LeftButtonsContainer>
        <CustomButton
          isActive={activeButton === 'all'}
          onClick={() => handleButtonClick('all')}>
          <CustomBadge count={10} size="small">
            <p>All</p>
          </CustomBadge>
        </CustomButton>
        <CustomButton
          isActive={activeButton === 'camera'}
          onClick={() => handleButtonClick('camera')}>
          <CustomBadge count={5} size="small">
            <CameraOutlined twoToneColor={'#01B2B8'} />
          </CustomBadge>
        </CustomButton>
        <CustomButton
          isActive={activeButton === 'phone'}
          onClick={() => handleButtonClick('phone')}>
          <CustomBadge count={3} size="small">
            <PhoneOutlined twoToneColor={'#01B2B8'} />
          </CustomBadge>
        </CustomButton>
        <CustomButton
          isActive={activeButton === 'message'}
          onClick={() => handleButtonClick('message')}>
          <CustomBadge count={7} size="small">
            <MessageOutlined twoToneColor={'#01B2B8'} />
          </CustomBadge>
        </CustomButton>
      </LeftButtonsContainer>
      <RightButtonsContainer>
        <Dropdown menu={{ items }} trigger={['click']}>
          <Button>
            <BulbTwoTone twoToneColor={'#01B2B8'} />
            Providers <DownOutlined />
          </Button>
        </Dropdown>
      </RightButtonsContainer>
    </ButtonRowContainer>
  );
};

export default ButtonRow;
