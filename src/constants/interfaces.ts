export interface ContextProps {
  darkMode: boolean;
  changeMode?: () => void;
  colors: {
    headerColor: string;
    dark: string;
    light: string;
    dim: string;
    box: string;
    grey: string;
  };
}
