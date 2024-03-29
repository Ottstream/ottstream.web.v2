import React, { useState } from 'react';

import { Modal } from 'antd';
import styled from 'styled-components';

import ListMeta from '@/components/InfiniteList/ListMeta';
import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

interface InfiniteListItemPropsI {
  index: number;
}
const ChatUrlsListItemWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${props => props.theme.colorPalette.white};
  border-radius: 6px;
  padding: 6px 0;
  border-bottom: 1px solid #ccd5dd;
`;

const ChatUrlsListItem = ({}: InfiniteListItemPropsI) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ChatUrlsListItemWrapper>
        <div className="left-icon-container">
          <ChatAvatar type={'OnlyAvatar'} index={2} />
        </div>
        <ListMeta
          title={<p>{'Title'}</p>}
          description={<p className="description">{'Description'}</p>}
        />

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
      </ChatUrlsListItemWrapper>
    </>
  );
};

export default ChatUrlsListItem;
