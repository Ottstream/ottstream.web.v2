import React, { useState } from 'react';

import { Button, List, Modal } from 'antd';
import styled from 'styled-components';

interface InfiniteListItemPropsI {
  index: number;
}
const ChatMembersListItemWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colorPalette.white};
  border-radius: 6px;
  padding: 6px 0;
  border-bottom: 1px solid #ccd5dd;

  .ant-list-item-meta,
  .ant-list-item-meta-content {
    margin-left: 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    //background-color: red;
  }

  p {
    color: #012f57;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: left;
  }
  .description {
    color: #7a7a7a;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-decoration: underline;
  }
  .right-info {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 100%;
    margin: 0 8px 0 8px;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #dee6ec;
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: #dee6ec;
  }
`;
const ChatMembersListItem = ({}: InfiniteListItemPropsI) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ChatMembersListItemWrapper>
        <List.Item.Meta
          title={<p>{'Ani Hovhannisyan'}</p>}
          description={<p className="description">{'Ant Design'}</p>}
        />
        <div className="right-info">
          <RemoveButton onClick={() => setIsModalVisible(true)}>
            <p>Remove</p>
          </RemoveButton>
        </div>
        <Modal
          title="Remove"
          centered
          open={isModalVisible}
          okText={'Remove'}
          okType={'danger'}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => setIsModalVisible(false)}>
          <p>
            Are you sure you want to delete this item, or do you want to cancel
            the action?
          </p>
        </Modal>
      </ChatMembersListItemWrapper>
    </>
  );
};

export default ChatMembersListItem;
