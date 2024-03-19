// UserStatusDropdown.tsx
import React, { useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import AvatarRow from './AvatarRow';

interface UserStatusDropdownProps {
  onlineUsers: { name: string; imageUrl: string }[];
}

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  //background-color: #fff;
  //border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const UserStatusDropdown: React.FC<UserStatusDropdownProps> = ({
  onlineUsers,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 10px',
        margin: '10px 0',
      }}>
      <div>
        <p>User Online</p>
      </div>
      <DropdownContainer>
        <DropdownButton onClick={() => setIsOpen(!isOpen)}>
          All Users <DownOutlined />
        </DropdownButton>
        {isOpen && (
          <DropdownContent>
            <AvatarRow users={onlineUsers} />
          </DropdownContent>
        )}
      </DropdownContainer>
    </div>
  );
};

export default UserStatusDropdown;
