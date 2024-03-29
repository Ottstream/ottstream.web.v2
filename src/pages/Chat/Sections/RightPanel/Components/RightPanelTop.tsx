import React from 'react';

import { MenuFoldOutlined } from '@ant-design/icons';
import { MenuUnfoldOutlined } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';

import RightPanelTopContent from 'Pages/Chat/Sections/RightPanel/Components/RightPanelTopContent';

interface RightPanelTopPropI {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const RightPanelTop = ({ collapsed, setCollapsed }: RightPanelTopPropI) => {
  return (
    <>
      {collapsed ? (
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
      ) : (
        <RightPanelTopContent
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      )}
    </>
  );
};

export default RightPanelTop;
