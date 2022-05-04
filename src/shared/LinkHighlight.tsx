import React, { useContext } from "react";
import styled from "styled-components";
import { ContextProps } from "../constants/interfaces";
import { Context } from "../context/Provider";

interface Props {
  text: string;
  link: string;
}
const LinkHighlight: React.FC<Props> = ({ text, link }) => {
  const { darkMode, colors } = useContext(Context);
  return (
    <HightLight darkMode={darkMode} colors={colors} href={link} target='_blank'>
      {text}
    </HightLight>
  );
};
const HightLight = styled.a<ContextProps>`
  position: relative;
  color: ${(props) => props.colors.light};
  font-weight: 500;
  /* text-decoration: underline; */
  &:hover {
    color: ${(props) => props.colors.light};
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
