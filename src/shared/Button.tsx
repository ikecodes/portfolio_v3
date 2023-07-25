import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  active?: boolean;
}
interface BtnProps {
  active?: boolean;
}
const Button: React.FC<Props> = ({ children, active }) => {
  return (
    <Btn
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      active={active}
    >
      {children}
    </Btn>
  );
};

const Btn = styled(motion.button)<BtnProps>`
  background-color: ${(props) =>
    props.active ? colors.primaryLight : "transparent"};
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-weight: 900;
  border-radius: 1.5rem;
`;
export default Button;
