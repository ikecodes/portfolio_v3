import React, { useState } from "react";
import { ContextProps } from "../constants/interfaces";
interface Props {
  children: React.ReactNode;
}

export const Context = React.createContext({} as ContextProps);

const Provider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const colors = {
    primary: "#D0FA27",
    primaryLight: "rgba(208, 250, 39, 0.5)",
    headerColor: "#F8FFEA",
    dark: darkMode ? "#080808" : "#F5F9FF",
    light: darkMode ? "#F5F9FF" : "#080808",
    dim: "rgba(255, 255, 255, 0.7)",
    grey: "#F2F2F2",
  };

  const changeMode = () => {
    setDarkMode((val) => !val);
  };
  return (
    <Context.Provider value={{ darkMode, changeMode, colors }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
