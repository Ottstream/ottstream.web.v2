import React from 'react';

import {
  InstagramFilled,
  MenuFoldOutlined,
  MessageFilled,
  MoreOutlined,
  SendOutlined,
  SmileOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';
import { Button, Dropdown, MenuProps } from 'antd';
import styled from 'styled-components';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';

const PanelHeader = styled.div`
  border-bottom: 1px solid #ccd5dd;
  padding-bottom: 10px;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .upper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 100%;
  }
  .lower {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .icon-row {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .user-status {
      color: #7a7a7a;
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
      }
    }
  }
`;

const ThreeDotMenuDropdownItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 276px;
  padding: 10px;
  border-bottom: 1px solid #ccd5dd;
`;
const CustomDropdown = styled(Dropdown)``;
interface RightPanelTopPropI {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const RightPanelTop = ({ collapsed, setCollapsed }: RightPanelTopPropI) => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <ThreeDotMenuDropdownItem>
          <p>Block Chat</p>
        </ThreeDotMenuDropdownItem>
      ),
    },
    {
      key: '2',
      label: (
        <ThreeDotMenuDropdownItem>
          <p>Delete Chat</p>
        </ThreeDotMenuDropdownItem>
      ),
    },
    {
      key: '3',
      label: (
        <ThreeDotMenuDropdownItem>
          <p>Pin Chat</p>
        </ThreeDotMenuDropdownItem>
      ),
    },
    {
      key: '4',
      label: (
        <ThreeDotMenuDropdownItem>
          <p>Search</p>
        </ThreeDotMenuDropdownItem>
      ),
    },
  ];
  return (
    <>
      {collapsed ? (
        <Button
          type="text"
          icon={!collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 56,
            height: 56,
          }}
        />
      ) : (
        <PanelHeader>
          <div className={'wrapper'}>
            <div className={'upper'}>
              <Button
                type="text"
                icon={
                  !collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 56,
                  height: 56,
                }}
              />
              <div>
                <ChatAvatar type={'AvatarChatInfo'} index={3} />
              </div>
              <CustomDropdown
                trigger={['click']}
                menu={{ items }}
                overlayStyle={{
                  boxShadow: '4px 0px 6px 0px #0A3C6840',
                }}
                placement={'bottomLeft'}>
                <Button
                  type="text"
                  icon={<MoreOutlined />}
                  onClick={() => {}}
                  style={{
                    fontSize: '16px',
                    width: 56,
                    height: 56,
                  }}
                />
              </CustomDropdown>
            </div>
            <div className="lower">
              <div className="icon-row">
                <ChatIcon size={'large'} icon={<InstagramFilled />} />
                <ChatIcon size={'large'} icon={<MessageFilled />} />
                <ChatIcon size={'large'} icon={<WhatsAppOutlined />} />
                <ChatIcon size={'large'} icon={<SendOutlined />} />
              </div>
              <div className="user-status">
                <p>User is active</p>
              </div>
            </div>
          </div>
        </PanelHeader>
      )}
    </>
  );
};

export default RightPanelTop;
