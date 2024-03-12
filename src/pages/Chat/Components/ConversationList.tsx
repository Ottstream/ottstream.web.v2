import { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import ListItem from '@/pages/Chat/Components/ListItem.tsx';
import SearchSection from '@/pages/Chat/Components/SearchSection.tsx';
import ToggleSection from '@/pages/Chat/Components/ToggleSection.tsx';

interface ConversationListPropsI {
  type: 'Clients' | 'Teams';
}

const ConversationList = ({ type }: ConversationListPropsI) => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    if (items.length >= 50) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 10 })));
    }, 1500);
  };
  return (
    <div>
      <div style={{ width: '100%' }}>
        <SearchSection
          placeholder="search"
          style={{ width: '100%', margin: '10px 0', padding: '0 20px' }}
        />
      </div>
      <div style={{ width: '100%', margin: '10px 0', padding: '0 20px' }}>
        <ToggleSection />
      </div>
      <InfiniteScroll
        style={{ margin: '10px 0' }}
        dataLength={items.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        // }
      >
        {items.map((i, index) => (
          <div>
            <ListItem
              key={i}
              item={index}
              index={type === 'Teams' ? index : 20 + index}
            />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ConversationList;
