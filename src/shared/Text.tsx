import React, { useContext } from "react";
import styled from "styled-components";
import { ContextProps } from "../constants/interfaces";
import { Context } from "../context/Provider";

interface Props {
  children: React.ReactNode;
}

const Text: React.FC<Props> = ({ children }) => {
  const { darkMode, colors } = useContext(Context);
  return (
    <Paragraph colors={colors} darkMode={darkMode}>
      {children}
    </Paragraph>
  );
};
const Paragraph = styled.p<ContextProps>`
  color: ${(props) => props.colors.dim};
  font-size: 1.2rem;
`;
export default Text;
