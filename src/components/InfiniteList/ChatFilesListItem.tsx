import React, { useState } from 'react';

import styled from 'styled-components';

import Icon from '@/components/Icon';
import ListMeta from '@/components/InfiniteList/ListMeta';
import ChatIcon from 'Pages/Chat/Components/ChatIcon';

interface ChatFilesListItemPropsI {
  index: number;
  name: string;
  extension: string;
}
const ChatFilesListItemWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${props => props.theme.colorPalette.white};
  border-radius: 6px;
  padding: 6px 0;
  border-bottom: 1px solid #ccd5dd;
`;

const ChatFilesListItem = ({ name, extension }: ChatFilesListItemPropsI) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ChatFilesListItemWrapper>
        <div className="left-icon-container">
          <ChatIcon
            icon={<Icon name={extension} size={40} />}
            ghost
            size={'large'}
          />
        </div>
        <ListMeta
          title={<p>{name}</p>}
          description={<p className="description">{'123.4 MB'}</p>}
        />
      </ChatFilesListItemWrapper>
    </>
  );
};

export default ChatFilesListItem;
