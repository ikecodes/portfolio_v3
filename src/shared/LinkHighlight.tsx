import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  text: string;
  link: string;
  lg?: boolean;
}
interface LinkProps {
  lg?: boolean;
}
const LinkHighlight: React.FC<Props> = ({ text, link, lg }) => {
  return (
    <HightLight lg={lg} href={link} target='_blank'>
      {text}
    </HightLight>
  );
};
const HightLight = styled.a<LinkProps>`
  position: relative;
  color: ${colors.primary};
  font-weight: 500;
  text-decoration: none;
  font-size: ${(props) => (props.lg ? "2rem" : "1rem")};
  text-transform: capitalize;
  &:hover {
    color: ${colors.primary};
  }
  &:hover::before {
    width: 100%;
    opacity: 1;
  }
  &::before {
    content: "";
    height: 50%;
    width: 20%;
    opacity: 1;
    bottom: 0;
    background-color: rgba(225, 225, 225, 0.2);
    position: absolute;
    transition: all 0.2s cubic-bezier(1, -0.77, 1, 1);
  }
`;
export default LinkHighlight;
