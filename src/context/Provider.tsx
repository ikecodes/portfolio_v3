import React, { useState } from "react";
import { ContextProps } from "../constants/interfaces";
interface Props {
  children: React.ReactNode;
}

export const Context = React.createContext({} as ContextProps);

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
    dark: dark ? "#080808" : "#F5F9FF",
    light: dark ? "#F5F9FF" : "#080808",
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
