import React from 'react';

import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import MainPanelHeaderRightSection from 'Pages/Chat/Components/MainPanelHeaderRightSection';
import { MainPanelHeaderWrapper } from 'Pages/Chat/Sections/MainPanel/MainPanel.styles';

const MainPanelHeader = () => {
  return (
    <>
      <MainPanelHeaderWrapper>
        <ChatAvatar type={'AvatarWithNameOnTheRightAndSecondLine'} index={7} />
        <MainPanelHeaderRightSection />
      </MainPanelHeaderWrapper>
    </>
  );
};

export default MainPanelHeader;
