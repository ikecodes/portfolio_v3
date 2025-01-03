import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  active?: boolean;
  icon?: any;
}
interface BtnProps {
  active?: boolean;
}
const Button: React.FC<Props> = ({ icon, children, active }) => {
  return (
    <Btn
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      active={active}
    >
      {children}
      <div className="ms-2">{icon}</div>
      {/* <motion.div
        initial={{ translateY: 0 }} // Starting position
        animate={{ translateY: -2 }} // Move up by 10px
        transition={{
          type: "spring",
          stiffness: 100, // Lower stiffness for a smoother transition
          damping: 30, // Higher damping to reduce the bounce effect
          repeat: Infinity, // Infinite loop
          repeatType: "reverse", // Reverse direction after each loop (goes up, then comes back down)
          repeatDelay: 0.5, // Optional: Add delay between repetitions
        }}
        className="ms-2"
      >
        {icon}
      </motion.div> */}
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
  display: flex;
  gap: 3px;
  & a {
    text-decoration: none;
  }
`;
export default Button;
