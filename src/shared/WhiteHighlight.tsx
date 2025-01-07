import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
interface Props {
  children: React.ReactNode;
  link: string;
}
const WhiteHighlight: React.FC<Props> = ({ link, children }) => {
  return (
    <HightLight href={link} target="_blank" rel="noreferrer">
      {children}
    </HightLight>
  );
};
const HightLight = styled.a`
  color: ${colors.light};
  font-weight: 500;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${colors.light};
  }
`;
export default WhiteHighlight;
