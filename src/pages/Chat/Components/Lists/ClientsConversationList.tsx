import { Layout } from 'antd';
import styled from 'styled-components';

import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import InfiniteListItem from '@/components/InfiniteList/InfiniteListItem';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';
import useMockUsersData from 'Pages/Chat/Hooks/useMockUsersData';

interface ConversationListPropsI {}

const ClientsConversationListWrapper = styled(Layout)`
  height: 100%;
  overflow: hidden;
  padding: 0 10px;
`;

const ClientsConversationList = ({}: ConversationListPropsI) => {
  const { users, hasMore, fetchMoreData } = useMockUsersData({});

  return (
    <>
      <ClientsConversationListWrapper>
        <SearchInput placeholder="search" />
        <ToggleSwitch beforeText={'All'} afterText={'Unnoticed'} />
        <InfiniteList
          next={fetchMoreData}
          hasMore={hasMore}
          dataLength={users.length}
          endMessage={defaultEndMessage()}
          loader={defaultLoader()}
          children={users.map((user, index) => (
            <InfiniteListItem
              key={index}
              index={20 + index}
              name={user.name}
              social={user.social}
              unreadCount={user.unreadCount}
              status={user.status}
            />
          ))}
        />
      </ClientsConversationListWrapper>
    </>
  );
};

export default ClientsConversationList;