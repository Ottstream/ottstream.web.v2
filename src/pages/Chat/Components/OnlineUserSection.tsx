import React, { CSSProperties, useState } from 'react';

import { Collapse as AntCollapse, Badge, CollapseProps } from 'antd';
import styled from 'styled-components';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

const users = [
  { name: 'User 1', imageUrl: 'avatar1.jpg' },
  { name: 'User 2', imageUrl: 'avatar2.jpg' },
  { name: 'User 3', imageUrl: 'avatar3.jpg' },
  { name: 'User 4', imageUrl: 'avatar4.jpg' },
  { name: 'User 5', imageUrl: 'avatar4.jpg' },
  { name: 'User 6', imageUrl: 'avatar4.jpg' },
  { name: 'User 7', imageUrl: 'avatar4.jpg' },
  { name: 'User 8', imageUrl: 'avatar4.jpg' },
  { name: 'User 9', imageUrl: 'avatar4.jpg' },
  { name: 'User 10', imageUrl: 'avatar4.jpg' },
  { name: 'User 11', imageUrl: 'avatar4.jpg' },
  { name: 'User 12', imageUrl: 'avatar4.jpg' },
  { name: 'User 13', imageUrl: 'avatar4.jpg' },
  { name: 'User 14', imageUrl: 'avatar4.jpg' },
  { name: 'User 15', imageUrl: 'avatar4.jpg' },
  { name: 'User 16', imageUrl: 'avatar4.jpg' },
  { name: 'User 17', imageUrl: 'avatar4.jpg' },

  { name: 'User 2', imageUrl: 'avatar2.jpg' },
  { name: 'User 3', imageUrl: 'avatar3.jpg' },
  { name: 'User 4', imageUrl: 'avatar4.jpg' },
  { name: 'User 5', imageUrl: 'avatar4.jpg' },
  { name: 'User 6', imageUrl: 'avatar4.jpg' },
  { name: 'User 7', imageUrl: 'avatar4.jpg' },
  { name: 'User 8', imageUrl: 'avatar4.jpg' },
  { name: 'User 9', imageUrl: 'avatar4.jpg' },
  { name: 'User 10', imageUrl: 'avatar4.jpg' },
  { name: 'User 11', imageUrl: 'avatar4.jpg' },
  { name: 'User 12', imageUrl: 'avatar4.jpg' },
  { name: 'User 13', imageUrl: 'avatar4.jpg' },
  { name: 'User 14', imageUrl: 'avatar4.jpg' },
  { name: 'User 15', imageUrl: 'avatar4.jpg' },
  { name: 'User 16', imageUrl: 'avatar4.jpg' },
  { name: 'User 17', imageUrl: 'avatar4.jpg' },

  { name: 'User 5', imageUrl: 'avatar4.jpg' },
  { name: 'User 6', imageUrl: 'avatar4.jpg' },
  { name: 'User 7', imageUrl: 'avatar4.jpg' },
  { name: 'User 8', imageUrl: 'avatar4.jpg' },
  { name: 'User 9', imageUrl: 'avatar4.jpg' },
  { name: 'User 10', imageUrl: 'avatar4.jpg' },
  { name: 'User 11', imageUrl: 'avatar4.jpg' },
  { name: 'User 12', imageUrl: 'avatar4.jpg' },
  { name: 'User 13', imageUrl: 'avatar4.jpg' },
  { name: 'User 14', imageUrl: 'avatar4.jpg' },
  { name: 'User 15', imageUrl: 'avatar4.jpg' },
  { name: 'User 16', imageUrl: 'avatar4.jpg' },
  { name: 'User 17', imageUrl: 'avatar4.jpg' },
  // Add more users as needed
];

const Collapse = styled(AntCollapse)`
  .ant-collapse-content-box {
    padding-block: 0 !important;
  }
`;

const AvatarRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
  gap: 20px;

  & > * {
    flex: 1 1 20%;
    max-width: 25%;
    box-sizing: border-box;
  }
`;

const CollapseLabelWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  padding: 10px 15px 0 15px;
  margin: 0 0 10px 0;
`;

const CollapseChild = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 110px); // TODO: double check it
  display: flex;
  flex-direction: column;
  left: 0;
  overflow: auto;
  z-index: 10;
  background-color: white;
`;
const OnlineUserSection: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const renderCollapseLabel = ({
    text,
    color,
    isVisible = true,
    style,
  }: {
    text: string;
    color: string;
    isVisible?: boolean;
    style?: CSSProperties;
  }) => {
    return (
      <CollapseLabelWrapper
        style={{
          ...style,
        }}>
        {isVisible && (
          <>
            <Badge offset={[-5, 0]} color={color} dot={true} />
            <p>{text}</p>
          </>
        )}
      </CollapseLabelWrapper>
    );
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: renderCollapseLabel({
        text: 'Users Online',
        color: '#52C41A', // TODO: Use general colors
        isVisible: !isCollapsed,
        style: { margin: '0', padding: '0' },
      }),
      children: (
        <CollapseChild>
          {renderCollapseLabel({ text: 'Users Online', color: '#52C41A' })}
          <AvatarRowContainer>
            {users.slice(0, 8).map((_, index) => (
              <ChatAvatar type={'AvatarWithNameAtTheBottom'} index={index} />
            ))}
          </AvatarRowContainer>
          {renderCollapseLabel({ text: 'Users Offline', color: '#FF4D4F' })}
          <AvatarRowContainer>
            {users.slice(9).map((_, index) => (
              <ChatAvatar type={'AvatarWithNameAtTheBottom'} index={index} />
            ))}
          </AvatarRowContainer>
        </CollapseChild>
      ),
      extra: <p>All Users</p>,
    },
  ];

  return (
    <>
      <Collapse
        onChange={() => setIsCollapsed(!isCollapsed)}
        expandIconPosition={'end'}
        ghost
        items={items}
      />
      <AvatarRowContainer>
        {users.slice(0, 4).map((_, index) => (
          <ChatAvatar type={'AvatarWithNameAtTheBottom'} index={index} />
        ))}
      </AvatarRowContainer>
    </>
  );
};

export default OnlineUserSection;
