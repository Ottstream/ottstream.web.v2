import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import styled from 'styled-components';

import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import InfiniteListItem from '@/components/InfiniteList/InfiniteListItem';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';
import useMockInfiniteListData from 'Pages/Chat/Hooks/useMockInfiniteListData';

interface ConversationListPropsI {}

const TeamsConversationListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
  padding: 0 10px;
`;
const Button = styled(ChatIcon)`
  margin: 10px 0;
`;
const TeamsConversationList = ({}: ConversationListPropsI) => {
  const { items, hasMore, fetchMoreData } = useMockInfiniteListData();

  return (
    <>
      <TeamsConversationListWrapper>
        <Button
          block
          shape={'default'}
          type={'primary'}
          icon={<PlusOutlined />}
          onClick={() => {}}>
          <p> Create Group</p>
        </Button>

        <SearchInput placeholder="search" />
        <ToggleSwitch />
        <InfiniteList
          next={fetchMoreData}
          hasMore={hasMore}
          dataLength={items.length}
          endMessage={defaultEndMessage()}
          loader={defaultLoader()}
          children={items.map((_, index) => (
            <InfiniteListItem key={index} index={index} />
          ))}
        />
      </TeamsConversationListWrapper>
    </>
  );
};

export default TeamsConversationList;
