import React from 'react';

import styled from 'styled-components';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

interface ChatAvatarRowPropsI {
  users: { name: string; imageUrl: string }[];
}

const ChatAvatarRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  gap: 20px;

  & > * {
    flex: 1 1 20%;
    max-width: 25%;
    box-sizing: border-box;
  }
`;

const ChatAvatarRow = ({ users }: ChatAvatarRowPropsI) => {
  return (
    <ChatAvatarRowContainer>
      {users.map((_, index) => (
        <ChatAvatar type={'AvatarWithNameAtTheBottom'} index={index} />
      ))}
    </ChatAvatarRowContainer>
  );
};

export default ChatAvatarRow;
