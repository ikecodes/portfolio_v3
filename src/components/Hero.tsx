import React from "react";
import styled from "styled-components";
import Container from "../layouts/Container";
import Text from "../shared/Text";
import { motion } from "framer-motion";
import WhiteHighlight from "../shared/WhiteHighlight";
import colors from "../constants/colors";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <Container>
      <Box>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Hello className='m-0'>👋🏾 Hello, I'm</Hello>
          </motion.div>

          <Header className='text-capitalize mb-0 m-0'>
            onuorah ikechukwu
          </Header>
          <Width className='mt-4'>
            <Text>
              a <WhiteHighlight> software engineer</WhiteHighlight> specializing
              in building (and occasionally designing) awesome
              <WhiteHighlight> web</WhiteHighlight> &
              <WhiteHighlight> mobile applications</WhiteHighlight>.
              {/* Currently, I’m
          focused on building accessible, scalable, human-centered product at{" "}
          <LinkHighlight text='buzzline' link='https://www.buzzline.app/' /> */}
            </Text>
            <a href='mailto:ikecodes@gmail.com'>
              <Button active>contact me</Button>
            </a>
          </Width>
        </motion.div>
      </Box>
    </Container>
  );
};
const Box = styled.div`
  margin-top: 10rem;
`;
const Header = styled.h1`
  color: ${colors.light};
  font-size: 7rem;
  font-weight: 900;
  @media (max-width: 1200px) {
    font-size: 6rem;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  @media (max-width: 576px) {
    font-size: 4rem;
  }
`;
const Width = styled.div`
  max-width: 700px;
`;
const Hello = styled.h2`
  color: ${colors.primary};
  font-weight: 900;
`;

export default Hero;
