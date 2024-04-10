import React, { useState } from 'react';

import { Button, Modal } from 'antd';
import styled from 'styled-components';

import ListMeta from '@/components/InfiniteList/ListMeta';

const ChatMembersListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colorPalette.white};
  border-radius: 6px;
  padding: 6px 0;
  border-bottom: 1px solid #ccd5dd;
`;

const RemoveButton = styled(Button)`
  background-color: #dee6ec;
  border: none;
  color: black;
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;
  }
`;
interface ChatMembersListItemPropsI {
  name: string;
}

const ChatMembersListItem = ({ name }: ChatMembersListItemPropsI) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ChatMembersListItemWrapper>
        <ListMeta
          title={<p>{name}</p>}
          description={
            <p className="description member-email">{'loya@ttsolutions.am'}</p>
          }
        />
        <div className="right-info">
          <RemoveButton
            type={'default'}
            onClick={() => setIsModalVisible(true)}>
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
