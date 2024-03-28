import React, { useState } from 'react';

import {
  BulbTwoTone,
  CameraOutlined,
  MessageOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Badge, Button, Radio, RadioChangeEvent } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

const ButtonRow = () => {
  const [activeButton, setActiveButton] = useState<string>('all');

  const handleButtonClick = (e: RadioChangeEvent) => {
    setActiveButton(e.target.value);
  };

  return (
    <>
      <ConversationTypeContainer>
        <Radio.Group
          value={activeButton}
          buttonStyle={'solid'}
          optionType={'button'}
          size={'large'}
          onChange={handleButtonClick}>
          <Badge count={1} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio value="all">
              <p>All</p>
            </Radio>
          </Badge>
          <Badge count={9} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio value="camera">
              <CameraOutlined />
            </Radio>
          </Badge>
          <Badge count={0} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio value="phone">
              <PhoneOutlined />
            </Radio>
          </Badge>
          <Badge count={2} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio value="message">
              <MessageOutlined />
            </Radio>
          </Badge>
        </Radio.Group>
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingRight: '5px',
          }}>
          <Button>
            <BulbTwoTone twoToneColor={'#01B2B8'} />
            Providers
          </Button>
        </div>
      </ConversationTypeContainer>
    </>
  );
};

const ConversationTypeContainer = styled(Header)`
  width: 100%;
  display: flex;
  padding: 0;

  .ant-radio-button-wrapper {
    border-radius: 25px !important;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-radio-group {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export default ButtonRow;
