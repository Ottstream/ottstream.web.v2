import React from 'react';

import { Layout } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useTheme } from 'styled-components';

import ConversationTypesSection from 'Pages/Chat/Components/ConversationTypesSection';
import OnlineUserSection from 'Pages/Chat/Components/OnlineUserSection';
import TabBarWrapper from 'Pages/Chat/Components/TabBarWrapper';
import {
  FlexContainer,
  SiderContainer,
} from 'Pages/Chat/Sections/LeftPanel/LeftPanel.styles';

const LeftPanel = () => {
  const theme = useTheme();

  return (
    <>
      <SiderContainer
        width={336}
        theme={theme}
        trigger={null}
        collapsible
        collapsed={false}>
        <FlexContainer>
          <Layout>
            <ConversationTypesSection />
            <Layout className={'layout-with-shadow'}>
              <OnlineUserSection />
              <TabBarWrapper />
            </Layout>
          </Layout>
        </FlexContainer>
      </SiderContainer>
    </>
  );
};

export default LeftPanel;
