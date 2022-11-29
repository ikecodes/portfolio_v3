import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
}

const Text: React.FC<Props> = ({ children }) => {
  return <Paragraph>{children}</Paragraph>;
};
const Paragraph = styled.p`
  color: ${colors.dim};
  font-size: 1.3rem;
`;
export default Text;
