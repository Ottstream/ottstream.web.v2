import React from 'react';

import {
  DownOutlined,
  PhoneOutlined,
  ShareAltOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Dropdown, MenuProps, Space } from 'antd';
import styled from 'styled-components';

import ChatIcon from 'Pages/Chat/Components/ChatIcon';

const MainPanelHeaderRightSectionComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    text-decoration: none;
    color: #272b2e;
  }
`;

const MainPanelHeaderRightSection = () => {
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
  return (
    <>
      <MainPanelHeaderRightSectionComponent>
        <ChatIcon icon={<ShareAltOutlined />} />
        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <Space style={{ margin: '0 10px' }}>
              All Chats
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <ChatIcon icon={<PhoneOutlined />} />
        <ChatIcon icon={<VideoCameraOutlined />} />
      </MainPanelHeaderRightSectionComponent>
    </>
  );
};

export default MainPanelHeaderRightSection;
