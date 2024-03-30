import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

interface InfiniteListItemPropsI {
  index: number;
  name?: string;
  status?: string;
  social?: string;
  unreadCount?: number;
}
const InfiniteListItem = ({
  index,
  name,
  status,
  unreadCount,
  social,
}: InfiniteListItemPropsI) => {
  return (
    <>
      <div style={{ margin: '10px 0' }}>
        <ChatAvatar
          type={'AvatarWithNameOnTheRightAndSecondLineWithRightInfo'}
          index={index}
          name={name}
          status={status}
          unreadCount={unreadCount}
          social={social}
        />
      </div>
    </>
  );
};

export default InfiniteListItem;
