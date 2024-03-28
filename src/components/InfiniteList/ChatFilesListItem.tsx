import React, { useState } from 'react';

import { FilePdfFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import styled from 'styled-components';

import ListMeta from '@/components/InfiniteList/ListMeta';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';

interface InfiniteListItemPropsI {
  index: number;
}
const ChatFilesListItemWrapper = styled.div`
  display: flex;
  //flex-direction: row;
  //flex-wrap: wrap;
  justify-content: start;
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
const ChatFilesListItem = ({}: InfiniteListItemPropsI) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ChatFilesListItemWrapper>
        <div className="left-icon-container">
          <ChatIcon icon={<FilePdfFilled size={20} />} ghost size={'large'} />
        </div>
        <ListMeta
          title={<p>{'FileName.pdf'}</p>}
          description={<p className="description">{'123.4 MB'}</p>}
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
      </ChatFilesListItemWrapper>
    </>
  );
};

export default ChatFilesListItem;
