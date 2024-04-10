import React from 'react';

import { Badge as AntBadge } from 'antd';
import styled from 'styled-components';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';

const RightPaneCollapsedContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin: 10px 0 0 0;
`;
const ChatAvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Badge = styled(AntBadge)`
  margin: 10px 0;
`;

const RightPaneCollapsedContent = () => {
  return (
    <>
      <RightPaneCollapsedContentContainer>
        <ChatAvatarWrapper>
          <ChatAvatar type={'OnlyAvatar'} index={3} />
          <Badge color={'green'} dot />
        </ChatAvatarWrapper>
        <ChatAvatarWrapper>
          <ChatAvatar type={'OnlyAvatar'} index={3} />
          <Badge color={'red'} dot />
        </ChatAvatarWrapper>
      </RightPaneCollapsedContentContainer>
    </>
  );
};

export default RightPaneCollapsedContent;
