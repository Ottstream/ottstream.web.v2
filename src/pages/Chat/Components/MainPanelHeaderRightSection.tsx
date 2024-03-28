import React from 'react';

import {
  DownOutlined,
  PhoneOutlined,
  ShareAltOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Dropdown as AntDropdown, Space as AntSpace, MenuProps } from 'antd';
import styled from 'styled-components';

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

const MainPanelHeaderRightSection = () => {
  const items: MenuProps['items'] = [
    {
      label: <p>1st menu item</p>,
      key: '0',
    },
    {
      label: <p>2nd menu item</p>,
      key: '1',
    },
    {
      label: <p>3rd menu item</p>,
      key: '3',
    },
  ];
  return (
    <>
      <MainPanelHeaderRightSectionWrapper>
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space>
            <MainPanelChatIcon icon={<ShareAltOutlined />} type={'text'} />
            All Chats
            <DownOutlined />
          </Space>
        </Dropdown>
        <MainPanelChatIcon icon={<PhoneOutlined />} ghost />
        <MainPanelChatIcon icon={<VideoCameraOutlined />} ghost />
      </MainPanelHeaderRightSectionWrapper>
    </>
  );
};

export default MainPanelHeaderRightSection;
