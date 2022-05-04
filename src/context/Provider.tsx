import React, { useState } from "react";
import { ContextProps } from "../constants/interfaces";
interface Props {
  children: React.ReactNode;
}

export const Context = React.createContext({} as ContextProps);

const Provider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const colors = {
    headerColor: "#F8FFEA",
    dark: darkMode ? "#101011" : "#F5F9FF",
    // dark: darkMode ? "#080808" : "#F5F9FF",
    light: darkMode ? "#F5F9FF" : "#080808",
    dim: "#777775",
    box: "#16161a",
    grey: "#F2F2F2",
    green: "#6ff6a7",
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
