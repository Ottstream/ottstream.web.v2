import React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

import ChatUrlsListItem from '@/components/InfiniteList/ChatUrlsListItem';
import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import useMockUrlsData from 'Pages/Chat/Hooks/useMockUrlsData';

interface FilesListPropsI {}

const ChatUrlsListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
`;

const ChatUrlsList = ({}: FilesListPropsI) => {
  const { urls, hasMore, fetchMoreData } = useMockUrlsData();

  return (
    <ChatUrlsListWrapper>
      <InfiniteList
        next={fetchMoreData}
        hasMore={hasMore}
        dataLength={urls.length}
        endMessage={defaultEndMessage()}
        loader={defaultLoader()}
        children={
          <>
            {urls.map((url, index) => (
              <ChatUrlsListItem
                key={index}
                index={index}
                title={url.title}
                link={url.link}
                color={url.color}
                description={url.description}
              />
            ))}
          </>
        }
      />
    </ChatUrlsListWrapper>
  );
};
const Button = styled(ChatIcon)`
  margin: 0;
`;

export default ChatUrlsList;
