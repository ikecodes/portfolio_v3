export interface ContextProps {
  dark: boolean;
  changeState?: () => void;
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
    tertiary: string;
    textColor: string;
    headerColor: string;
    overlay: string;
    white: string;
    black: string;
    dark: string;
    light: string;
    grey: string;
    grey1: string;
    grey2: string;
  };
}
