import React from 'react';

import { InstagramOutlined } from '@ant-design/icons';
import { List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

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
}

interface MessengerPropsI {
  messages: MessageI[];
}

const MessengerWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  //border: 1px solid black;

  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
  .ant-list-item {
    text-decoration: none;
    list-style: none;
  }

  .avatar-wrapper {
    margin: 5px;
  }
  .text-container {
    color: white;
    background: linear-gradient(90deg, #285d85 11.54%, #04aeb6 89.47%);
    padding: 10px;
    border-radius: 6px 6px 2px 6px;
  }
  .message-creator-name {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: #a0a2b1;
    text-align: end;
  }
  .message-status {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    color: #a0a2b1;
    text-align: end;
  }
`;

const Messenger = ({ messages }: MessengerPropsI) => {
  return (
    <MessengerWrapper>
      <InfiniteScroll
        dataLength={messages.length}
        next={() => {}}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="chatScroll"
        inverse={true} // Scrolls to bottom by default
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // border: '1px solid gold',
        }}>
        {messages
          .slice(0) // shallow copy
          .reverse() // reverse order
          .map(item => (
            <List.Item
              key={item.id}
              style={{
                margin: '10px 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: item.sender.id === 1 ? 'flex-end' : 'flex-start',
                flexDirection: item.sender.id === 1 ? 'row' : 'row-reverse',
              }}>
              <div>
                <ChatIcon icon={<InstagramOutlined />} size={'large'} />
              </div>
              <div>
                <div className={'message-creator-name'}>{item.sender.name}</div>
                <div className={'text-container'}>{item.text}</div>
                <div className={'message-status'}>Seen</div>
              </div>
              <div className={'avatar-wrapper'}>
                <ChatAvatar
                  type={'OnlyAvatar'}
                  index={item.sender.id === 1 ? 1 : 2}
                />
              </div>
            </List.Item>
          ))}
      </InfiniteScroll>
    </MessengerWrapper>
  );
};
export default Messenger;
