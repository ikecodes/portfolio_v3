import React, { useContext } from "react";
import styled from "styled-components";
import { ContextProps } from "../constants/interfaces";
import { Context } from "../context/Provider";

interface Props {
  children: React.ReactNode;
}
const Header: React.FC<Props> = ({ children }) => {
  const { darkMode, colors } = useContext(Context);
  return (
    <Head darkMode={darkMode} colors={colors}>
      {children}
    </Head>
  );
};

const Head = styled.h1<ContextProps>`
  color: ${(props) => props.colors.headerColor};
  text-transform: uppercase;
  font-size: 4rem;
`;
export default Header;
