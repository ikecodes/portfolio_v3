import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  text: string;
  link: string;
}
const LinkHighlight: React.FC<Props> = ({ text, link }) => {
  return (
    <HightLight href={link} target='_blank'>
      {text}
    </HightLight>
  );
};
const HightLight = styled.a`
  position: relative;
  color: ${colors.light};
  font-weight: 500;
  font-size: 1.2rem;
  &:hover {
    color: ${colors.light};
  }
  &:hover::before {
    width: 50%;
    opacity: 1;
  }
  &::before {
    content: "";
    height: 100%;
    width: 0.5rem;
    opacity: 0;
    bottom: 0;
    background-color: rgba(225, 225, 225, 0.2);
    position: absolute;
    transition: all 0.2s ease-in;
  }
`;
export default LinkHighlight;
