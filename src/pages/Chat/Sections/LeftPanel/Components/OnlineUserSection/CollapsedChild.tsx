import React from 'react';

import styled from 'styled-components';

import ChatAvatarRow from 'Pages/Chat/Components/ChatAvatarRow';
import CollapsedLabel from 'Pages/Chat/Sections/LeftPanel/Components/OnlineUserSection/CollapsedLabel';

const CollapseChildWrapper = styled.div`
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
interface CollapsedChildPropsI {
  isCollapsed: boolean;
  onlineUsersList: any;
  offlineUsersList: any;
}
const CollapsedChild = ({
  isCollapsed,
  onlineUsersList,
  offlineUsersList,
}: CollapsedChildPropsI) => {
  return (
    <>
      <CollapseChildWrapper>
        <CollapsedLabel
          isVisible={isCollapsed}
          badgeColor={'#52C41A'}
          text={'Users Online'}
          applyPaddingAndMargin
        />
        <ChatAvatarRow users={onlineUsersList} />
        <CollapsedLabel
          isVisible={isCollapsed}
          badgeColor={'#FF4D4F'}
          text={'Users Offline'}
          applyPaddingAndMargin
        />
        <ChatAvatarRow users={offlineUsersList} />
      </CollapseChildWrapper>
    </>
  );
};

export default CollapsedChild;
