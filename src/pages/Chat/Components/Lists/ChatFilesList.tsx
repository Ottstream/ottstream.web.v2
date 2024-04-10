import React from 'react';

import { Layout } from 'antd';
import styled from 'styled-components';

import ChatFilesListItem from '@/components/InfiniteList/ChatFilesListItem';
import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import useMockFilesData from 'Pages/Chat/Hooks/useMockFilesData';

interface FilesListPropsI {}

const FilesListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
`;

const ChatFilesList = ({}: FilesListPropsI) => {
  const { files, hasMore, fetchMoreData } = useMockFilesData();
  return (
    <FilesListWrapper>
      <InfiniteList
        next={fetchMoreData}
        hasMore={hasMore}
        dataLength={files.length}
        endMessage={defaultEndMessage()}
        loader={defaultLoader()}
        children={
          <>
            {files.map((file, index) => (
              <ChatFilesListItem
                key={index}
                index={20 + index}
                name={file.name}
                extension={file.extension}
              />
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
