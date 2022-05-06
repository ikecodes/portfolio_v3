export interface ContextProps {
  darkMode: boolean;
  changeMode?: () => void;
  colors: {
    primary: string;
    dark: string;
    light: string;
    dim: string;
    box: string;
    grey: string;
    green: string;
  };
}
