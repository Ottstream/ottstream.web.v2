import React from 'react';

import styled from 'styled-components';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

interface AvatarRowProps {
  users: { name: string; imageUrl: string }[];
}

const AvatarRowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 20px;
  margin-bottom: 20px;
`;

const AvatarRow: React.FC<AvatarRowProps> = ({ users }) => {
  return (
    <AvatarRowContainer>
      {users.map((_, index) => (
        <ChatAvatar type={'AvatarWithNameAtTheBottom'} index={index} />
      ))}
    </AvatarRowContainer>
  );
};

export default AvatarRow;
