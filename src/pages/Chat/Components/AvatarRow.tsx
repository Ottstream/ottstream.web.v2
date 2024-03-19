// AvatarRow.tsx
import React from 'react';

import styled from 'styled-components';

import CustomAvatar from 'Pages/Chat/Components/CustomAvatar';

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CustomAvatar index={index} />
          <p>Name</p>
        </div>
      ))}
    </AvatarRowContainer>
  );
};

export default AvatarRow;
