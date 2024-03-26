import React, { useState } from 'react';

import {
  LeftOutlined,
  MenuFoldOutlined,
  PlusOutlined,
  RightOutlined,
} from '@ant-design/icons';
import {
  BellTwoTone,
  MessageTwoTone,
  ThunderboltTwoTone,
} from '@ant-design/icons/lib/icons';
import { Badge, Button, Input, Layout, Menu, MenuProps } from 'antd';
// eslint-disable-next-line import/named
import { ButtonProps } from 'antd/es/button/button';
import { Outlet, useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';

import Icon from '@/components/Icon';

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
          <OTTSButtonTypeTwo
            type={'text'}
            icon={<PlusOutlined />}
            onClick={() => {}}>
            <p>Add Client</p>
          </OTTSButtonTypeTwo>
          <Input style={{ margin: '10px' }} placeholder="Search" />

          <OTTSIconButton
            type="text"
            icon={<MessageTwoTone twoToneColor={'#165d9b'} />}
            onClick={() => {}}
            hasLeftBorder
            count={7}
          />

          <OTTSIconButton
            type="text"
            icon={<ThunderboltTwoTone twoToneColor={'#165d9b'} />}
            onClick={() => {}}
            hasLeftBorder
          />

          <OTTSIconButton
            type="text"
            icon={<BellTwoTone twoToneColor={'#165d9b'} />}
            onClick={() => {}}
            hasLeftBorder
            hasRightBorder
            count={2}
          />
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
      <OTTSButtonComponent {...props}>
        {props.children}
        {/**/}
      </OTTSButtonComponent>
    </>
  );
};

const OTTSButtonComponent = styled(Button)``;

// OTTS Button Type 2 ---------------------------------------------------------
const OTTSButtonTypeTwoComponent = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(
    90deg,
    #0c99a8 8.33%,
    rgba(10, 60, 104, 0.82) 100.98%
  );
  padding: 4px 15px 4px 15px;
  gap: 10px;
  border-radius: 6px;

  &:hover {
    color: white !important;
    background: linear-gradient(
      90deg,
      #0c99a8 8.33%,
      rgba(10, 60, 104, 0.82) 100.98%
    ) !important;
  }
`;

const OTTSButtonTypeTwo = ({ ...props }: OTTSButtonPropsI) => {
  return (
    <>
      <OTTSButtonTypeTwoComponent {...props}>
        {props.children}
        {/**/}
      </OTTSButtonTypeTwoComponent>
    </>
  );
};

// ----------------------------------------------------------------

// OTTS Icon Button

const OTTSIconButtonWrapper = styled.div`
  height: 100%;
  .ant-badge {
    height: 100%;
  }
`;
const OTTSIconButtonComponent = styled(Button)<OTTSIconButtonPropsI>`
  padding: 0 10px;
  margin: 0;
  height: 100%;
  border-radius: 0;
  ${({ hasLeftBorder }) => hasLeftBorder && 'border-left: 1px solid #C7C7C7;'}
  ${({ hasRightBorder }) =>
    hasRightBorder && ' border-right: 1px solid #C7C7C7;'}

  &.ant-btn.ant-btn-icon-only {
    width: auto;
    padding: 0 20px;
  }
`;
const OTTSBadge = styled(Badge)``;
interface OTTSIconButtonPropsI extends OTTSButtonPropsI {
  hasLeftBorder?: boolean;
  hasRightBorder?: boolean;
  count?: number;
}

const OTTSIconButton = ({ count = 0, ...props }: OTTSIconButtonPropsI) => {
  return (
    <OTTSIconButtonWrapper>
      <OTTSBadge color="#ffb800" count={count} offset={[-15, 15]}>
        <OTTSIconButtonComponent {...props}>
          {props.children}
        </OTTSIconButtonComponent>
      </OTTSBadge>
    </OTTSIconButtonWrapper>
  );
};

export default AdminLayout;
