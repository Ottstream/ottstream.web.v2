import React from 'react';

import { InstagramOutlined } from '@ant-design/icons';
import { List } from 'antd';
import styled from 'styled-components';

import Icon from '@/components/Icon';
import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';

export interface MessageI {
  id: number;
  text: string;
  sender: {
    id: number;
    name: string;
    avatarUrl: string;
  };
  seen?: boolean;
}
export interface MessagePropsI {
  item: MessageI;
}

const MessageComponent = styled(List.Item)<{ $isOtherUser?: boolean }>`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: ${props => (props.$isOtherUser ? 'flex-end' : 'flex-start')};
  flex-direction: ${props => (props.$isOtherUser ? 'row' : 'row-reverse')};

  .avatar-wrapper {
    margin: 0 5px;
    align-self: end;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: ${props => (props.$isOtherUser ? 'end' : 'start')};
  }
  .message-text-container {
    display: flex;
    flex-direction: ${props => (props.$isOtherUser ? 'row-reverse' : 'row')};
    align-items: center;
  }
  .message-text {
    color: white;
    background: linear-gradient(90deg, #285d85 11.54%, #04aeb6 89.47%);
    padding: 10px;
    border-radius: 6px 6px 2px 6px;
  }
  .message-status,
  .message-creator-name {
    color: #a0a2b1;
  }
`;

const Message = ({ item }: MessagePropsI) => {
  const isOtherUser = item.sender.id === 1;
  return (
    <>
      <MessageComponent key={item.id} $isOtherUser={isOtherUser}>
        <div className={'content-wrapper'}>
          <div className={'message-creator-name'}>
            <p>{item.sender.name}</p>
          </div>
          <div className={'message-text-container'}>
            <div className={'message-text'}>
              <p>{item.text}</p>
            </div>
            <ChatIcon icon={<Icon name="x" size={12} />} size={'small'} />
          </div>
          {item.seen && (
            <div className={'message-status'}>
              <p>Seen</p>
            </div>
          )}
        </div>
        <div className={'avatar-wrapper'}>
          <ChatAvatar
            type={'OnlyAvatar'}
            index={item.sender.id === 1 ? 13 : 9}
          />
        </div>
      </MessageComponent>
    </>
  );
};

export default Message;
