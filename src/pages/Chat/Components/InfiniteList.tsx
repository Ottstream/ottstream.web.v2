import { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import ListItem from 'Pages/Chat/Components/ListItem';

interface InfiniteListPropsI {
  type: 'Clients' | 'Teams';
}

const InfiniteList = ({ type }: InfiniteListPropsI) => {
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
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      height={'100%'}
      endMessage={
        <div>
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        </div>
      }>
      {items.map((_, index) => (
        <div>
          <ListItem
            key={index}
            item={index}
            index={type === 'Teams' ? index : 20 + index}
          />
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteList;
