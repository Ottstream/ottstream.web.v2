import React, { useState } from 'react';

import { useTheme } from 'styled-components';

import { SiderContainer } from '@/pages/Chat/Sections/RightPanel/RightPanel.styles';
import RightPanelContent from 'Pages/Chat/Components/RightPanelContent';
import RightPanelTop from 'Pages/Chat/Components/RightPanelTop';

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
        <RightPanelTop collapsed={collapsed} setCollapsed={setCollapsed} />
        {!collapsed && <RightPanelContent />}
      </SiderContainer>
    </>
  );
};

export default RightPanel;
