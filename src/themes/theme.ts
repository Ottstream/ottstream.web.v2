import { DefaultTheme as Theme } from 'styled-components';

const colorPalette: Theme['colorPalette'] = {
  primary: '#1890ff',
  secondaryColor: '#0A3C68',
  secondaryDark: '#012F57',
  subtle: '#4E6E8A',
  light1: '#DEE6EC',
  dark3: '#F8F8FA',
  light: '#F8F8FA',
  blueGreen: '#01B2B8',
};

const breakpoints: Theme['breakpoints'] = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const typography: Theme['typography'] = {
  fontFamily: 'Montserrat',
  fontSize: '14px',
  fontStyle: 'normal ',
  fontWeight: 400,
  lineHeight: '22px',
};

const theme: Theme = {
  colorPalette,
  breakpoints,
  typography,
};

export default theme;
