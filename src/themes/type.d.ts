import { DefaultTheme } from 'styled-components';

interface ColorPalette {
  primary: string[];
  secondary: string[];
}

interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

interface Typography {
  fontFamily: string;
  fontSize: string;
}

interface Theme extends DefaultTheme {
  primaryColor: string;
  secondaryColor: string;
  colorPalette: ColorPalette;
  breakpoints: Breakpoints;
  typography: Typography;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
