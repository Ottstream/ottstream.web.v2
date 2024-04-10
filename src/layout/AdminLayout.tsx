import React, { useState } from 'react';

import {
  LeftOutlined,
  MenuFoldOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps } from 'antd';
import { ButtonProps } from 'antd/es/button/button';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import Icon from '@/components/Icon';
import Header from '@/pages/Header/Header';

import {
  FlexContainer,
  HeaderContainer,
  LogoContainer,
  LogoName,
  SiderContainer,
  Trigger,
} from './Layout.styles';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('Review', 'review', <Icon name="review" />),
  getItem('Providers/Resellers', 'providers', <Icon name="providers" />),
  getItem('Users', 'sub1', <Icon name="users" />, [
    getItem('List', 'users'),
    getItem('Activity', 'users-activity'),
  ]),
  getItem('Clients', 'sub2', <Icon name="clients" />, [
    getItem('List', 'clients'),
    getItem('Activity', 'clients-activity'),
    getItem('Bills', 'clients-bills'),
  ]),
  getItem('Transactions', 'transactions', <Icon name="transactions" />),
  getItem('Packages', 'packages', <Icon name="packages" />),
  getItem('Equipments', 'sub3', <Icon name="equipments" />, [
    getItem('Types', 'equipments'),
    getItem('List', '11'),
  ]),
  getItem('Discounts', 'discounts', <Icon name="discounts" />),
  getItem('Appointments', 'appointments', <Icon name="appointments" />),
  getItem('Shippings', 'shippings', <Icon name="shippings" />),
  getItem('Flussonics Hosts', 'flussonics', <Icon name="flussonics" />),
  getItem('Help', 'help', <Icon name="help" />),
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const CustomTrigger = () => (
    <Trigger>
      {collapsed ? (
        <RightOutlined />
      ) : (
        <div style={{ textAlign: 'start', paddingLeft: '16px' }}>
          <LeftOutlined style={{ marginRight: '8px' }} /> Minimize Menu
        </div>
      )}
    </Trigger>
  );

  const onClick: MenuProps['onClick'] = e => {
    navigate(e.key);
  };

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <SiderContainer
        width={256}
        theme={theme}
        trigger={<CustomTrigger />}
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}>
        <LogoContainer onClick={() => navigate('dashboard')}>
          <Icon name="logoSM" size={28} />
          {!collapsed ? <LogoName>OTT Stream </LogoName> : null}
        </LogoContainer>
        <FlexContainer>
          <Menu theme="light" onClick={onClick} mode="inline" items={items} />
        </FlexContainer>
      </SiderContainer>
      <Layout>
        <HeaderContainer>
          <OTTSButton
            type="text"
            icon={<MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <Header />
        </HeaderContainer>
        <div
          style={{
            display: 'flex',
            flex: 1,
            height: '100%',
            overflow: 'hidden',
          }}>
          <Outlet />
        </div>
      </Layout>
    </Layout>
  );
};

// TODO: Should be moved to separate file

// OTTS Button ----------------------------------------------------------------
interface OTTSButtonPropsI extends ButtonProps {}
const OTTSButton = ({ ...props }: OTTSButtonPropsI) => {
  return (
    <>
      <OTTSButtonComponent {...props}>{props.children}</OTTSButtonComponent>
    </>
  );
};

const OTTSButtonComponent = styled(Button)``;

export default AdminLayout;
