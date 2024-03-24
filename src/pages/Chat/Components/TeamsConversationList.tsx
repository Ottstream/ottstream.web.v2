import { useState } from 'react';

import { Button, Layout } from 'antd';

import Icon from '@/components/Icon';
import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';
import InfiniteListItem from '@/components/InfiniteList/InfiniteListItem';
import SearchInput from 'Pages/Chat/Components/SearchInput';
import ToggleSwitch from 'Pages/Chat/Components/ToggleSwitch';

interface ConversationListPropsI {}

const TeamsConversationList = ({}: ConversationListPropsI) => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 50) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 5 })));
    }, 1500);
  };
  return (
    <>
      <Layout
        style={{
          height: '100%',
          overflow: 'hidden',
        }}>
        <Button
          onClick={() => {}}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#01B2B8',
            padding: '20px',
            margin: '5px',
            color: 'white',
          }}>
          <Icon
            name="filter"
            color="#fffffff"
            style={{ marginRight: '10px' }}
          />
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
      </Layout>
    </>
  );
};

export default TeamsConversationList;
