import React, { useState } from 'react';

import {
  InstagramFilled,
  MenuFoldOutlined,
  MessageFilled,
  MoreOutlined,
  SendOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';
import { Dropdown as AntDropdown, MenuProps } from 'antd';
import styled from 'styled-components';

import Icon from '@/components/Icon';
import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import RightPanelDropdownMenuItem from 'Pages/Chat/Sections/RightPanel/Components/RightPanelDropdownMenuItem';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <RightPanelDropdownMenuItem
        text={'Block Chat'}
        modalTitle={'Block'}
        modalDescription={
          ' Are you sure you want to delete this item, or do you want to cancel the action?'
        }
        showModal
      />
    ),
  },
  {
    key: '2',
    label: (
      <RightPanelDropdownMenuItem
        text={'Delete Chat'}
        modalTitle={'Delete'}
        modalDescription={
          ' Are you sure you want to delete this item, or do you want to cancel the action?'
        }
        showModal
      />
    ),
  },
  {
    key: '3',
    label: <RightPanelDropdownMenuItem text={'Pin Chat'} />,
  },
  {
    key: '4',
    label: <RightPanelDropdownMenuItem text={'Search'} />,
  },
];

const RightPanelHeader = styled.div`
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
      margin-top: 5px;
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
      }
    }
  }
`;

const Dropdown = styled(AntDropdown)``;

const Button = styled(ChatIcon)`
  font-size: 16px;
  &.ant-btn.ant-btn-icon-only {
    width: 56px;
    height: 56px;
  }
`;

const RemoveButton = styled(ChatIcon)`
  margin: 10px 0;
  border-color: #666666;
  color: #666666;
`;

interface RightPanelTopContentPropsI {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const RightPanelTopContent = ({
  collapsed,
  setCollapsed,
}: RightPanelTopContentPropsI) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleMenuFoldPress = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <RightPanelHeader>
        <div className={'wrapper'}>
          <div className={'upper'}>
            <Button
              type="text"
              shape={'default'}
              icon={!collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={handleMenuFoldPress}
            />
            <div>
              <ChatAvatar type={'AvatarChatInfo'} index={3} />
            </div>
            <Dropdown
              trigger={['click']}
              menu={{ items }}
              overlayStyle={{
                boxShadow: '4px 0px 6px 0px #0A3C6840',
              }}
              placement={'bottomLeft'}
              open={isDropdownOpen}>
              <Button
                type="text"
                shape={'default'}
                icon={<MoreOutlined />}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onChange={() => setIsDropdownOpen(false)}
              />
            </Dropdown>
          </div>
          <div className="lower">
            <div className="icon-row">
              <ChatIcon
                size={'large'}
                icon={<Icon name="instagram" size={18} />}
              />
              <ChatIcon size={'large'} icon={<Icon name="viber" size={18} />} />
              <ChatIcon
                size={'large'}
                icon={<Icon name="telegram" size={18} />}
              />
              <ChatIcon
                size={'large'}
                icon={<Icon name="whatsapp" size={18} />}
                disabled
              />
              <ChatIcon size={'large'} icon={<Icon name="x" size={18} />} />
            </div>
            <div className="user-status">
              <p>User is active</p>
            </div>
            <div className="user-status">
              <p>User is blocked</p>
            </div>
            <RemoveButton shape={'default'} type={'default'}>
              <p>Remove Chat</p>
            </RemoveButton>
          </div>
        </div>
      </RightPanelHeader>
    </>
  );
};

export default RightPanelTopContent;
