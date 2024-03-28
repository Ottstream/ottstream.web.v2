import React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

import ChatFilesListItem from '@/components/InfiniteList/ChatFilesListItem';
import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import useMockInfiniteListData from 'Pages/Chat/Hooks/useMockInfiniteListData';

interface FilesListPropsI {}

const FilesListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
`;

const ChatFilesList = ({}: FilesListPropsI) => {
  const { items, hasMore, fetchMoreData } = useMockInfiniteListData();
  return (
    <FilesListWrapper>
      <InfiniteList
        next={fetchMoreData}
        hasMore={hasMore}
        dataLength={items.length}
        endMessage={defaultEndMessage()}
        loader={defaultLoader()}
        children={
          <>
            {items.map((_, index) => (
              <ChatFilesListItem key={index} index={20 + index} />
            ))}
          </>
        }
      />
    </FilesListWrapper>
  );
};
const Button = styled(ChatIcon)`
  margin: 0;
`;

export default ChatFilesList;
