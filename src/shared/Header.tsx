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
  color: ${colors.primary};
  text-transform: capitalize;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  /* @media (max-width: 576px) {
    font-size: 3rem;
  } */
`;
export default Header;
