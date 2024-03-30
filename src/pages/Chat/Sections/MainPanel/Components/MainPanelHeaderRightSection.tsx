import React from 'react';

import {
  DownOutlined,
  PhoneOutlined,
  ShareAltOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Dropdown as AntDropdown, Space as AntSpace, MenuProps } from 'antd';
import styled from 'styled-components';

import Icon from '@/components/Icon';
import { MainPanelChatIcon } from 'Pages/Chat/Sections/MainPanel/MainPanel.styles';

const MainPanelHeaderRightSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    text-decoration: none;
    color: #272b2e;
  }
`;
const Dropdown = styled(AntDropdown)`
  cursor: pointer;
`;
const Space = styled(AntSpace)`
  margin: 0 10px;
`;

const MainPanelHeaderRightSectionItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  p {
    margin-left: 10px;
  }
`;

const MainPanelHeaderRightSection = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <MainPanelHeaderRightSectionItem>
          <Icon name="viber" size={18} />
          <p>Viber</p>
        </MainPanelHeaderRightSectionItem>
      ),
      key: '0',
    },
    {
      label: (
        <MainPanelHeaderRightSectionItem>
          <Icon name="instagram" size={18} />
          <p>Instagram</p>
        </MainPanelHeaderRightSectionItem>
      ),
      key: '1',
    },
    {
      label: (
        <MainPanelHeaderRightSectionItem>
          <Icon name="telegram" size={18} />
          <p>Telegram</p>
        </MainPanelHeaderRightSectionItem>
      ),
      key: '2',
    },
    {
      label: (
        <MainPanelHeaderRightSectionItem>
          <Icon name="x" size={18} />
          <p>X</p>
        </MainPanelHeaderRightSectionItem>
      ),
      key: '3',
    },
    {
      label: (
        <MainPanelHeaderRightSectionItem>
          <Icon name="whatsapp" size={18} />
          <p>Whatsapp</p>
        </MainPanelHeaderRightSectionItem>
      ),
      key: '4',
    },
  ];
  return (
    <>
      <MainPanelHeaderRightSectionWrapper>
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space>
            <MainPanelChatIcon
              icon={<Icon name="allChats" size={16} />}
              type={'text'}
            />
            All Chats
            <DownOutlined />
          </Space>
        </Dropdown>
        <MainPanelChatIcon icon={<Icon name="phone" size={16} />} ghost />
        <MainPanelChatIcon icon={<Icon name="videoCamera" size={16} />} ghost />
      </MainPanelHeaderRightSectionWrapper>
    </>
  );
};

export default MainPanelHeaderRightSection;
