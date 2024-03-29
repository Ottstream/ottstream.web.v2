import InfiniteScroll from 'react-infinite-scroll-component';
import { Props } from 'react-infinite-scroll-component/src';

export const defaultEndMessage = () => {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
    </div>
  );
};
export const defaultLoader = () => {
  return <h4>Loading...</h4>;
};

interface InfiniteListPropsI extends Props {}

const InfiniteList = ({ ...props }: InfiniteListPropsI) => {
  const height = '100%';
  // TODO: May be useful in the future
  // const renderItem = ({ index }: { index: number }) => {
  //   return (
  //     <InfiniteListItem
  //       key={index}
  //       index={type === 'Teams' ? index : 20 + index}
  //     />
  //   );
  // };
  return (
    <>
      <InfiniteScroll {...props} height={height} children={props.children} />
    </>
  );
};

export default InfiniteList;
