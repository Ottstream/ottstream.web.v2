import { List } from 'antd';
import styled from 'styled-components';

import CustomAvatar from 'Pages/Chat/Components/CustomAvatar';

interface ListItemProps {
  item: any; // Define type for your item
  index: number;
}

const StyledListItem = styled(List.Item)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px 5px 10px;
  padding: 8px 16px 8px 16px;
  background-color: #f5f6f8;
  border-radius: 6px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .ant-list-item-meta {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-list-item-meta-content {
  }
`;

const StyledLink = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TimeStamp = styled.div`
  font-size: 12px;
  color: #999;
`;

const NumberCircle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: #ffb800;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px 0 4px;
  p {
    font-weight: 400;
    font-size: 12px;
  }
`;
const ListItem = ({ index }: ListItemProps) => {
  const timestamp = '12:34 PM';
  const number = index + 1;
  return (
    <>
      <StyledListItem>
        <UserInfo>
          <CustomAvatar index={index} />
          <List.Item.Meta
            title={<StyledLink>{'Ani Hovhannisyan'}</StyledLink>}
            description="Ant Design"
          />
        </UserInfo>

        <RightInfo>
          <TimeStamp>
            <p>{timestamp}</p>
          </TimeStamp>
          <NumberCircle>
            <p>{number}</p>
          </NumberCircle>
        </RightInfo>
      </StyledListItem>
    </>
  );
};

export default ListItem;
