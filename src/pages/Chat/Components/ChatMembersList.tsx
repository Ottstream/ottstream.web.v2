import { useState } from 'react';

import { Button, Layout } from 'antd';

import Icon from '@/components/Icon.tsx';
import ChatMembersListItem from '@/components/InfiniteList/ChatMembersListItem.tsx';
import InfiniteList, {
  defaultEndMessage,
  defaultLoader,
} from '@/components/InfiniteList/InfiniteList';

interface MembersListPropsI {}

const ChatMembersList = ({}: MembersListPropsI) => {
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
        <InfiniteList
          next={fetchMoreData}
          hasMore={hasMore}
          dataLength={items.length}
          endMessage={defaultEndMessage()}
          loader={defaultLoader()}
          children={
            <>
              <Button
                block
                onClick={() => {}}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#01B2B8',
                  color: 'white',
                }}>
                <Icon
                  name="filter"
                  color="#fffffff"
                  style={{ marginRight: '10px' }}
                />
                <p> Add Member</p>
              </Button>
              {items.map((_, index) => (
                <ChatMembersListItem key={index} index={20 + index} />
              ))}
            </>
          }
        />
      </Layout>
    </>
  );
};

export default ChatMembersList;
