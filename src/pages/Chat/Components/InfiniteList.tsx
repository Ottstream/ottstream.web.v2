import { useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components';

import ListItem from 'Pages/Chat/Components/ListItem';

const StyledContainer = styled.div`
  flex: 1;
  overflow: scroll;
`;
interface InfiniteListPropsI {
  type: 'Clients' | 'Teams';
}

const InfiniteList = ({ type }: InfiniteListPropsI) => {
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    if (items.length >= 30) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  };
  return (
    <StyledContainer>
      <InfiniteScroll
        style={{
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
        }}
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        height={'75vh'}
        loader={<h4>Loading...</h4>}
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
    </StyledContainer>
  );
};

export default InfiniteList;
