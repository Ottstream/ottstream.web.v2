import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

interface InfiniteListItemPropsI {
  index: number;
}
const InfiniteListItem = ({ index }: InfiniteListItemPropsI) => {
  return (
    <>
      <div style={{ margin: '10px 0' }}>
        <ChatAvatar
          type={'AvatarWithNameOnTheRightAndSecondLineWithRightInfo'}
          index={index}
        />
      </div>
    </>
  );
};

export default InfiniteListItem;
