import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}
interface ContextProps {
  dark: boolean;
  changeState: () => void;
  colors: {};
}
export const Context = React.createContext<ContextProps | null>(null);

const Provider: React.FC<Props> = ({ children }) => {
  const [dark, setDark] = useState(true);

  const colors = {
    primary: "#D0FA27",
    primaryLight: "rgba(208, 250, 39, 0.5)",
    secondary: "rgba(255, 255, 255, 0.7)",
    tertiary: "#2280b9",
    textColor: "#14274A",
    headerColor: "#F8FFEA",
    overlay: "#4C509780",
    white: "#fff",
    black: "#000",
    dark: "#080808",
    light: "#F5F9FF",
    grey: "#F2F2F2",
    grey1: "#828282",
    grey2: "#444",
  };

  const changeState = () => {
    setDark((val) => !val);
  };
  return (
    <Context.Provider value={{ dark, changeState, colors }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
