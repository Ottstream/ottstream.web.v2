import React, { useState } from 'react';

import { Badge, Radio, RadioChangeEvent } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';

import Icon from '@/components/Icon';
import { modalDispatcher } from '@/components/Modal/services/modalSlice';
import { useAppDispatch } from '@/store/hooks';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';

const Button = styled(ChatIcon)`
  align-self: center;
`;
const ConversationTypeSection = () => {
  const [activeButton, setActiveButton] = useState<string>('all');

  const handleButtonClick = (e: RadioChangeEvent) => {
    setActiveButton(e.target.value);
  };

  const dispatch = useAppDispatch();
  const { openModal } = modalDispatcher(dispatch);
  const openModalHandler = () => {
    openModal({
      modalType: 'providers',
      props: { closeAction: () => console.log('closed') },
    });
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
              <Icon
                name="videoCamera"
                stroke={activeButton === 'camera' ? '#fff' : '#01B2B8'}
                width={16}
                height={12}
              />
            </Radio>
          </Badge>
          <Badge count={0} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio value="phone">
              {/*<PhoneOutlined />*/}
              <Icon
                name="phone"
                stroke={activeButton === 'phone' ? '#fff' : '#01B2B8'}
                width={16}
                height={12}
              />
            </Radio>
          </Badge>
          <Badge count={2} size={'default'} offset={[-5, 0]} color={'#FFB800'}>
            <Radio value="message">
              <Icon
                name="email"
                stroke={activeButton === 'message' ? '#fff' : '#01B2B8'}
                width={16}
                height={12}
              />
            </Radio>
          </Badge>
        </Radio.Group>
        <Button
          onClick={() => {
            openModalHandler();
          }}
          shape={'default'}
          icon={<Icon name="chatProviders" />}>
          <p>Providers</p>
        </Button>
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
    text-align: center;
  }
`;

export default ConversationTypeSection;
