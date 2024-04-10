import React from 'react';

import { List } from 'antd';
import { ListItemMetaProps } from 'antd/lib/list';
import styled from 'styled-components';

export const ListItem = styled(List.Item)`
  //  before was use in ChatAvatar AvatarWithNameOnTheRightWrapper component
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  //padding: 0 16px;
  border-radius: 6px;

  //  ENd

  .left-info {
    display: flex;
    justify-content: start;
    padding: 0 16px;
  }

  .right-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
    margin: 0 8px 0 8px;
  }
  .timestamp {
    font-size: 12px;
    color: #999;
  }
  .number-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    padding: 0 4px 0 4px;
    border-radius: 18px;
    color: white;
    background-color: #ffb800;
    p {
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

const Meta = styled(ListItem.Meta)`
  .ant-list-item-meta,
  .ant-list-item-meta-content {
    margin-left: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
  }
  .description {
    color: #a5aac6;
    margin-left: 5px;
  }
  .member-email {
    color: #7a7a7a;
    text-decoration: underline;
  }
`;

interface ListMetaPropsI extends ListItemMetaProps {}

const ListMeta = (props: ListMetaPropsI) => {
  return (
    <>
      <ListItem>
        <Meta {...props} />
      </ListItem>
    </>
  );
};

export default ListMeta;
