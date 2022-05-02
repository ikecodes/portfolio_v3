import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
}
const Header: React.FC<Props> = ({ children }) => {
  return <Head>{children}</Head>;
};

const Head = styled.h1`
  color: ${colors.headerColor};
  text-transform: uppercase;
  font-size: 4rem;
`;
export default Header;
