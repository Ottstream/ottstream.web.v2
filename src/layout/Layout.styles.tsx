import { Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 64px);
`;

export const SiderContainer = styled(Sider)`
  &.ant-layout-sider {
    background-color: ${props => props.theme.colorPalette.dark3};
    box-shadow: 0px 4px 6px 0px rgba(10, 60, 104, 0.25);
    .ant-menu {
      background-color: ${props => props.theme.colorPalette.dark3};
    }
    .ant-menu-root {
      position: relative;
      max-height: 100%;
      &::after {
        height: calc(100vh - 620px);
      }
      > .ant-menu-item {
        &:last-child {
          position: fixed;
          left: 0;
          max-width: 255px;
          bottom: 48px;
        }
      }
    }
    .ant-menu-inline-collapsed {
      > .ant-menu-item {
        &:last-child {
          position: absolute;
          left: 0;
          max-width: 255px;
          bottom: 0px;
        }
      }
    }
    .ant-menu-item {
      width: 100%;
      height: 46px;
      margin: 0;
      border-radius: 0;
      border-left: 3px solid transparent;
      color: ${props => props.theme.colorPalette.subtle};
    }
    .ant-menu-submenu,
    .ant-menu-submenu-title {
      margin: 0;
      width: 100%;
      border-radius: 0;
      border-left: 3px solid transparent;
      color: ${props => props.theme.colorPalette.subtle};
    }
    .ant-menu-submenu-title {
      height: 46px;
      margin: 0;
      border: none;
    }
    .ant-menu-item-selected {
      border-radius: 0;
      border-left: 3px solid ${props => props.theme.colorPalette.secondaryDark};
      background: ${props => props.theme.colorPalette.light1};
    }
  }
`;

export const LogoContainer = styled.button`
  height: 65px;
  display: flex;
  padding-left: 24px;
  align-items: center;
  background-color: ${props => props.theme.colorPalette.dark3};
`;
export const LogoName = styled.div`
  padding-left: 8px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(
    268deg,
    #06b2b8 -15.68%,
    #0a3c68 21.95%,
    #0a3c68 82.67%,
    #d5d9e0 109.37%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 120px;
  transition: width 2s;
`;

export const HeaderContainer = styled(Header)`
  padding: 0 20px 0 0;
  background-color: ${props => props.theme.colorPalette.dark3};
  display: flex;
  align-items: center;
`;

export const Trigger = styled.div`
  background-color: ${props => props.theme.colorPalette.light1};
  color: ${props => props.theme.colorPalette.subtle};
`;
