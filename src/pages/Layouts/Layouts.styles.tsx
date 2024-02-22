import styled from 'styled-components';
import theme from '../../themes/theme'
import Sider from 'antd/es/layout/Sider';
import { Header } from 'antd/es/layout/layout';
import { Layout } from 'antd';

export const FlexContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    height: calc(100% - 64px);
`

export const SiderContainer =  styled(Sider)`
    &.ant-layout-sider {
        background-color: ${theme.colorPalette.dark3};
        box-shadow: 0px 4px 6px 0px rgba(10, 60, 104, 0.25);
        .ant-menu {
            background-color: ${theme.colorPalette.dark3}
        }
        .ant-menu-item {
            width: 100%;
            height: 46px;
            margin: 0;
            border-radius: 0;
            border-left: 3px solid transparent;
            color: ${theme.colorPalette.subtle}
        }
        .ant-menu-submenu, .ant-menu-submenu-title {
            margin: 0;
            width: 100%;
            border-radius: 0;
            border-left: 3px solid transparent;
            color: ${theme.colorPalette.subtle}
        }
        .ant-menu-submenu-title {
            height: 46px;
            margin: 0;
            border: none
        }
        .ant-menu-item-selected {
            border-radius: 0;
            border-left: 3px solid ${theme.colorPalette.secondaryDark};
            background: ${theme.colorPalette.light1};
        }
    }
`

export const LogoContainer = styled.div`
    height: 65px;
    background-color: ${theme.colorPalette.dark3};
`

export const HeaderContainer = styled(Header)`
    padding: 0;
    background-color: ${theme.colorPalette.dark3};
`

export const Trigger = styled.div`
    background-color: ${theme.colorPalette.light1};
    color: ${theme.colorPalette.subtle};
`