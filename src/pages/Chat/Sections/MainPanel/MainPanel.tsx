import React from 'react';

import { Content } from 'antd/es/layout/layout';

import { MainPanelWrapper } from '@/pages/Chat/Sections/MainPanel/MainPanel.styles';
import MainPanelFooter from 'Pages/Chat/Components/MainPanelFooter';
import MainPanelHeader from 'Pages/Chat/Components/MainPanelHeader';

const MainPanel = () => {
  return (
    <MainPanelWrapper>
      <MainPanelHeader />
      <Content></Content>
      <MainPanelFooter />
    </MainPanelWrapper>
  );
};

export default MainPanel;
