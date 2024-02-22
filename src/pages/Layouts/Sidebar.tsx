import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import { FlexContainer, SiderContainer, LogoContainer, HeaderContainer, Trigger } from './Layouts.styles';
import Icon from '../../components/Icon'


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
  getItem('Review', '1', <Icon name='review'/>),
  getItem('Providers/Resellers', '2', <Icon name='providers'/>),
  getItem('Users', 'sub1', <Icon name='users'/>, [
    getItem('List', '3'),
    getItem('Activity', '4'),
  ]),
  getItem('Clients', 'sub2', <Icon name='clients'/>, [
    getItem('List', '5'),
    getItem('Activity', '6'),
    getItem('Bills', '7'),
  ]),
  getItem('Transactions', '8', <Icon name='transactions'/>),
  getItem('Packages', '9', <Icon name='packages'/>),
  getItem('Equipments', 'sub3', <Icon name='equipments'/>,  [
    getItem('Types', '10'),
    getItem('List', '11'),
  ]),
  getItem('Discounts', '12', <Icon name='discounts'/>),
  getItem('Appointments', '13', <Icon name='appointments'/>),
  getItem('Shippings', '14', <Icon name='shippings'/>),
  getItem('Flussonics Hosts', '15', <Icon name='flussonics'/>)
];


const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const CustomTrigger = () => (
    <Trigger>
        {collapsed 
          ? <RightOutlined />
          : <div style={{ textAlign: 'start', paddingLeft: '16px'}}><LeftOutlined style={{marginRight: '8px'}}/> Minimize Menu</div>
        }
    </Trigger>
  );

  return (
    <Layout style={{ minHeight: '100vh'}}>
        <SiderContainer 
            width={256}
            theme='light'
            trigger={<CustomTrigger />} 
            collapsible 
            collapsed={collapsed} 
            onCollapse={(value) => setCollapsed(value)} 
        >
        <LogoContainer />
        <FlexContainer>
            <Menu theme='light' mode='inline' defaultSelectedKeys={["1"]} items={items} />
            <Menu theme='light' items={[getItem('Help', '16', <Icon name='help'/>)]} />
        </FlexContainer>

      </SiderContainer>
        <Layout>
            <HeaderContainer>
                <Button
                    type="text"
                    icon={<MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
            </HeaderContainer>
        </Layout>
    </Layout>
  );
};

export default Sidebar;