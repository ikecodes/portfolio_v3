export interface ContextProps {
  darkMode: boolean;
  changeMode?: () => void;
  colors: {
    primary: string;
    primaryLight: string;
    headerColor: string;
    dark: string;
    light: string;
    dim: string;
    grey: string;
  };
}
