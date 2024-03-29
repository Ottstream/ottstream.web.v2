import React, { useState } from 'react';

import { Layout } from 'antd';
import { useTheme } from 'styled-components';

import { SiderContainer } from '@/pages/Chat/Sections/RightPanel/RightPanel.styles';
import { FlexContainer } from 'Pages/Chat/index.styles';
import RightPaneCollapsedContent from 'Pages/Chat/Sections/RightPanel/Components/RightPaneCollapsedContent';
import RightPanelContent from 'Pages/Chat/Sections/RightPanel/Components/RightPanelContent';
import RightPanelTop from 'Pages/Chat/Sections/RightPanel/Components/RightPanelTop';

const RightPanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const theme = useTheme();

  return (
    <>
      <SiderContainer
        width={312}
        collapsedWidth={56}
        theme={theme}
        trigger={null}
        collapsible
        collapsed={collapsed}
        reverseArrow={true}
        onCollapse={value => setCollapsed(value)}>
        <FlexContainer>
          <Layout>
            <RightPanelTop collapsed={collapsed} setCollapsed={setCollapsed} />
            {collapsed ? <RightPaneCollapsedContent /> : <RightPanelContent />}
          </Layout>
        </FlexContainer>
      </SiderContainer>
    </>
  );
};

export default RightPanel;
