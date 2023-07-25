import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <Background>
      <Bar>
        <Progress
          as={motion.div}
          initial={{ width: 0 }}
          animate={{
            width: "100%",
          }}
          transition={{ delay: 0.5, duration: 1.5 }}
        />
      </Bar>
    </Background>
  );
};

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.dark};
  position: absolute;
  z-index: 1000;
  display: grid;
  place-content: center;
`;
const Bar = styled.div`
  height: 0.2rem;
  width: 10rem;
  background-color: ${colors.primaryLight};
`;
const Progress = styled.div`
  height: 0.2rem;
  background-color: ${colors.primary};
`;
export default PageLoader;
