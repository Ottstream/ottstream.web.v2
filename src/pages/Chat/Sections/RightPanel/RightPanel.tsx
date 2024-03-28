import React, { useState } from 'react';

import { Badge, Layout } from 'antd';
import { useTheme } from 'styled-components';

import { SiderContainer } from '@/pages/Chat/Sections/RightPanel/RightPanel.styles';
import ChatAvatar from 'Pages/Chat/Components/ChatAvatar';
import RightPanelContent from 'Pages/Chat/Components/RightPanelContent';
import RightPanelTop from 'Pages/Chat/Components/RightPanelTop';
import { FlexContainer } from 'Pages/Chat/index.styles';

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
            {!collapsed && <RightPanelContent />}
            {collapsed && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <div>
                  <ChatAvatar type={'OnlyAvatar'} index={3} />
                </div>
                <div
                  style={{
                    margin: '10px 0',
                  }}>
                  <Badge color={'green'} dot />
                </div>
              </div>
            )}
          </Layout>
        </FlexContainer>
      </SiderContainer>
    </>
  );
};

export default RightPanel;
