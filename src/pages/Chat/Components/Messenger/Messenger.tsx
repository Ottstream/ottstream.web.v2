import React, { useState } from 'react';

import { Input, Layout } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import Message, { MessageI } from 'Pages/Chat/Components/Messenger/Message';

interface MessengerPropsI {
  messages: MessageI[];
}

const MessengerWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;

  .infinite-scroll-component__outerdiv {
    width: 100%;
  }
  .infinite-scroll {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Header = styled(Layout.Header)`
  background: #f8f8fa;
  padding: 0 16px;
  border: 0;
`;
const Content = styled(Layout.Content)`
  padding: 0 8px;
`;

const Search = styled(Input)`
  width: 100%;
  margin: 8px 0;
`;
const Messenger = ({ messages }: MessengerPropsI) => {
  const [isSearchVisible, setIsSearchVisible] = useState(true);

  return (
    <Layout>
      <Header>
        {isSearchVisible && <Search placeholder="Search in conversation" />}
      </Header>
      <Content>
        <MessengerWrapper>
          <InfiniteScroll
            dataLength={messages.length}
            hasMore={true}
            inverse={true} // Scrolls to bottom by default
            className="infinite-scroll"
            next={() => {}}
            loader={<h4>Loading...</h4>}>
            {messages
              .slice(0) // shallow copy
              .reverse() // reverse order
              .map(item => (
                <Message item={item} />
              ))}
          </InfiniteScroll>
        </MessengerWrapper>
      </Content>
    </Layout>
  );
};
export default Messenger;
