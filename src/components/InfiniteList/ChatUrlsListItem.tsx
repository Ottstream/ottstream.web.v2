import React, { useState } from 'react';

import { Modal } from 'antd';
import styled from 'styled-components';

import ListMeta from '@/components/InfiniteList/ListMeta';
import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

const ChatUrlsListItemWrapper = styled.div<{ $color: string }>`
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: ${props => props.theme.colorPalette.white};
  border-radius: 6px;
  padding: 6px 0;
  border-bottom: 1px solid #ccd5dd;
  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 5px;
    p {
      font-size: 14px;
    }
    .title {
      color: #012f57;
    }
    .description {
      color: #7a7a7a;
    }
    .link {
      color: #01b2b8;
      cursor: pointer;
    }
  }
  .colorful-circle {
    width: 40px;
    height: 40px;
    background-color: ${props => props.$color};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      color: white;
    }
  }
`;

interface ChatUrlsListItemPropsI {
  index: number;
  title: string;
  color: string;
  link: string;
  description: string;
}

const ChatUrlsListItem = ({
  title,
  link,
  description,
  color,
}: ChatUrlsListItemPropsI) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <ChatUrlsListItemWrapper $color={color}>
        <div className="left-icon-container">
          <div className={'colorful-circle'}>
            <p>AM</p>
          </div>
        </div>
        <div className={'text-container'}>
          <p className={'title'}>{title}</p>
          <p className={'description'}>{description}</p>
          <p className={'link'}>{link}</p>
        </div>
      </ChatUrlsListItemWrapper>
    </>
  );
};

export default ChatUrlsListItem;
