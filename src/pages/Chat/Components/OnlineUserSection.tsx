import React from 'react';

import AvatarRow from './AvatarRow';
import UserStatusDropdown from './UserStatusDropdown';

const users = [
  { name: 'User 1', imageUrl: 'avatar1.jpg' },
  { name: 'User 2', imageUrl: 'avatar2.jpg' },
  { name: 'User 3', imageUrl: 'avatar3.jpg' },
  { name: 'User 4', imageUrl: 'avatar4.jpg' },
  // Add more users as needed
];

const OnlineUserSection: React.FC = () => {
  return (
    <div style={{ margin: '10px 0' }}>
      <UserStatusDropdown onlineUsers={users} />
      <AvatarRow users={users} />
    </div>
  );
};

export default OnlineUserSection;
