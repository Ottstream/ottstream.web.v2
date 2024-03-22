import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

interface ListItemProps {
  item: any; // Define type for your item
  index: number;
}
const ListItem = ({ index }: ListItemProps) => {
  return (
    <>
      <div style={{ margin: '10px' }}>
        <ChatAvatar
          type={'AvatarWithNameOnTheRightAndSecondLineWithRightInfo'}
          index={index}
        />
      </div>
    </>
  );
};

export default ListItem;
