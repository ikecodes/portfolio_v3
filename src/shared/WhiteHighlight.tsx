import React, { useContext } from "react";
import styled from "styled-components";
import { ContextProps } from "../constants/interfaces";
import { Context } from "../context/Provider";
interface Props {
  children: React.ReactNode;
}
const WhiteHighlight: React.FC<Props> = ({ children }) => {
  const { darkMode, colors } = useContext(Context);
  return (
    <HightLight darkMode={darkMode} colors={colors}>
      {children}
    </HightLight>
  );
};
const HightLight = styled.span<ContextProps>`
  color: ${(props) => props.colors.light};
  font-weight: 500;
`;
export default WhiteHighlight;
