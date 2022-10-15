import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
  active?: boolean;
}
interface BtnProps {
  active?: boolean;
}
const Button: React.FC<Props> = ({ children, active }) => {
  return <Btn active={active}>{children}</Btn>;
};

const Btn = styled.button<BtnProps>`
  background-color: ${(props) =>
    props.active ? colors.primaryLight : "transparent"};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-weight: 900;
  border-radius: 1.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.primaryLight};
  }
`;
export default Button;
