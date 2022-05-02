import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
}
const ColoredHighlight: React.FC<Props> = ({ children }) => {
  return <HightLight>{children}</HightLight>;
};
const HightLight = styled.span`
  color: ${colors.primary};
  font-weight: 500;
`;
export default ColoredHighlight;
