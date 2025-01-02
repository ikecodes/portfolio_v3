import React from "react";
import styled from "styled-components";
import Container from "../layouts/Container";
import Text from "../shared/Text";
import { motion } from "framer-motion";
import WhiteHighlight from "../shared/WhiteHighlight";
import colors from "../constants/colors";
import Button from "../shared/Button";
import { Image, ImageBox } from "./About";
import Me from "../assets/images/i.jpg";
import { FaPaperPlane } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";

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
            <Hello className="m-0">👋🏽 Hi! I’m</Hello>
          </motion.div>

          <Header className="text-uppercase mb-0 m-0">onuorah ike</Header>

          <div className="row justify-content-start align-items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="col-lg-8 mb-5"
            >
              <Text>
                I build accessible, user-friendly web and mobile applications. I
                specialize in React, React Native, and Node.js for seamless
                interfaces and scalable APIs. My expertise also extends to AWS
                cloud services, where I design secure, efficient, and scalable
                solutions. I thrive on solving problems, learning new
                technologies, and collaborating with teams to create impactful
                products.
              </Text>
              <a
                href="mailto:ikecodes@gmail.com"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button icon={<FaPaperPlane />} active>
                  contact me
                </Button>
              </a>
            </motion.div>
            <motion.div
              className="col-lg-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
            >
              <ImageBox>
                <Image src={Me} />
              </ImageBox>
            </motion.div>
          </div>
          {/* <Width>
            <Text>
              a <WhiteHighlight> software engineer</WhiteHighlight> specializing
              in building (and occasionally designing) awesome
              <WhiteHighlight> web</WhiteHighlight> &
              <WhiteHighlight> mobile applications</WhiteHighlight>. <br /> I
              convert high quality design to{" "}
              <WhiteHighlight>seamless</WhiteHighlight> UI and write
              <WhiteHighlight> scalable</WhiteHighlight> &{" "}
              <WhiteHighlight>secure</WhiteHighlight> APIs.
            </Text>
            <a href="mailto:ikecodes@gmail.com">
              <Button active>contact me</Button>
            </a>
          </Width> */}
        </motion.div>
      </Box>
    </Container>
  );
};
const Box = styled.div`
  margin-top: 15rem;
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
  /* max-width: 700px; */
`;
const Hello = styled.h2`
  color: ${colors.primary};
  font-weight: 900;
`;

export default Hero;
