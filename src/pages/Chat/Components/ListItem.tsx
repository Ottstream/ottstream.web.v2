import { Avatar, List } from 'antd';

const ListItem = ({ item, index }: any) => {
  return (
    <>
      <List.Item>
        <List.Item.Meta
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: '10px',
            border: '1px solid gray',
          }}
          avatar={
            <Avatar
              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
            />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    </>
  );
};

export default ListItem;
