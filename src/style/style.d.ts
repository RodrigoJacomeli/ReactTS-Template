import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tercenary: string;
      success: string;
      info: string;
      warning: string;
      alert: string;
      black: string;
      white: string;
      gray: string;
    };
  }
}
