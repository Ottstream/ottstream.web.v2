import React, { useState } from 'react';

import {
  BulbTwoTone,
  CameraOutlined,
  DownloadOutlined,
  MessageOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { Badge, Button, Radio, RadioChangeEvent } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

import ChatIcon from 'Pages/Chat/Components/ChatIcon';

const ButtonRow = () => {
  const [activeButton, setActiveButton] = useState<string>('all');

  const handleButtonClick = (e: RadioChangeEvent) => {
    setActiveButton(e.target.value);
  };

  return (
    <>
      <ButtonRowContainer>
        <Radio.Group value={activeButton} onChange={handleButtonClick}>
          <Badge count={1} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio.Button value="all">
              <p style={{ fontSize: '18px' }}>All</p>
            </Radio.Button>
          </Badge>

          <Badge count={9} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio.Button value="camera">
              <CameraOutlined
                style={{ fontSize: '20px' }}
                twoToneColor={'#01B2B8'}
              />
            </Radio.Button>
          </Badge>

          <Badge count={0} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio.Button value="phone">
              <PhoneOutlined
                style={{ fontSize: '20px' }}
                twoToneColor={'#01B2B8'}
              />
            </Radio.Button>
          </Badge>
          <Badge count={2} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio.Button value="message">
              <MessageOutlined
                style={{ fontSize: '20px' }}
                twoToneColor={'#01B2B8'}
              />
            </Radio.Button>
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
      </ButtonRowContainer>
    </>
  );
};

const ButtonRowContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;

  .ant-btn.ant-btn-default {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    &:hover {
      background-color: transparent;
      border-color: transparent;
      color: #01b2b8;
    }
  }
  .ant-radio-button-wrapper {
    color: #01b2b8;
    background-color: transparent;
    border-color: transparent;
    padding-inline: 0;
    border-radius: 25px !important;
    text-align: center;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      display: none;
    }
    &:hover {
      border-color: transparent;
    }
    &:first-child {
      border-color: transparent;
    }

    &.ant-radio-button-wrapper-checked {
      background-color: #01b2b8;
      color: white;
      :hover {
        color: white;
      }
      .chat-icon {
        background-color: #01b2b8;
      }
    }
  }
  .ant-radio-group {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export default ButtonRow;
