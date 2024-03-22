import React, { useState } from 'react';

import { MenuFoldOutlined } from '@ant-design/icons';
import { MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';
import { useTheme } from 'styled-components';

import { FlexContainer } from '@/layout/Layout.styles';
import { SiderContainer } from '@/pages/Chat/Sections/RightPanel/RightPanel.styles';

const RightPanel = () => {
  const [collapsed, setCollapsed] = useState(true);
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
        <Button
          type="text"
          icon={!collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 56,
            height: 56,
          }}
        />
        <FlexContainer></FlexContainer>
      </SiderContainer>
    </>
  );
};

export default RightPanel;
