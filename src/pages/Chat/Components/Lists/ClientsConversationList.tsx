import { Layout } from 'antd';
import styled from 'styled-components';

import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import InfiniteListItem from '@/components/InfiniteList/InfiniteListItem';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';
import useMockInfiniteListData from 'Pages/Chat/Hooks/useMockInfiniteListData';

interface ConversationListPropsI {}

const ClientsConversationListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
  padding: 0 10px;
`;

const ClientsConversationList = ({}: ConversationListPropsI) => {
  const { items, hasMore, fetchMoreData } = useMockInfiniteListData();

  return (
    <>
      <ClientsConversationListWrapper>
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
      </ClientsConversationListWrapper>
    </>
  );
};

export default ClientsConversationList;
