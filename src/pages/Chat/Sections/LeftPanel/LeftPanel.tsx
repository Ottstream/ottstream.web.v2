import React from 'react';

import { Layout } from 'antd';
import { useTheme } from 'styled-components';

import ConversationTypesSection from 'Pages/Chat/Components/ConversationTypesSection';
import { FlexContainer } from 'Pages/Chat/index.styles';
import LeftPanelTabs from 'Pages/Chat/Sections/LeftPanel/Components/LeftPanelTabs';
import OnlineUserSection from 'Pages/Chat/Sections/LeftPanel/Components/OnlineUserSection/OnlineUserSection';
import { SiderContainer } from 'Pages/Chat/Sections/LeftPanel/LeftPanel.styles';

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
              <LeftPanelTabs />
            </Layout>
          </Layout>
        </FlexContainer>
      </SiderContainer>
    </>
  );
};

export default LeftPanel;
