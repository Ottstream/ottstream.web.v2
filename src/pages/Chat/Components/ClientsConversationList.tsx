import { useState } from 'react';

import { Layout } from 'antd';

import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import InfiniteListItem from '@/components/InfiniteList/InfiniteListItem';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';
import useMockInfiniteListData from 'Pages/Chat/Hooks/useMockInfiniteListData';

interface ConversationListPropsI {}

const ClientsConversationList = ({}: ConversationListPropsI) => {
  const { items, hasMore, fetchMoreData } = useMockInfiniteListData();

  return (
    <>
      <Layout
        style={{
          height: '100%',
          overflow: 'hidden',
        }}>
        <SearchInput placeholder="search" />
        <ToggleSwitch />
        <InfiniteList
          next={fetchMoreData}
          hasMore={hasMore}
          dataLength={items.length}
          endMessage={defaultEndMessage()}
          loader={defaultLoader()}
          children={items.map((_, index) => (
            <InfiniteListItem key={index} index={20 + index} />
          ))}
        />
      </Layout>
    </>
  );
};

export default ClientsConversationList;
