import React from "react";
import styled from "styled-components";
import Me from "../assets/images/me.jpg";
import colors from "../constants/colors";
import Header from "../shared/Header";
import Text from "../shared/Text";
import WhiteHighlight from "../shared/WhiteHighlight";
import { motion } from "framer-motion";
import technologies from "../constants/technologies";

const About = () => {
  return (
    <div className='mt-5' id='about'>
      <Header>about me</Header>
      <div className='row justify-content-start align-items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className='col-lg-8 mb-5'
        >
          <Text>
            I am Ikechukwu, a software engineer from Nigeria. I graduated from
            the University of Nigeria with a Bachelor of Sciences in Computer
            Science. After my graduation in 2019, I went full-time into software
            development.
          </Text>
          <Text>
            Fast-forward to today, I have gained strong experience building user
            friendly and accessible front-end for web and mobile applications
            using react and react native respectively. I also have strong
            background in building solid and scalable back-end using Node.js
          </Text>
          <Text>
            I enjoy working in teams and learning new technologies. Here are
            some technologies I use:
          </Text>
          <List>
            {technologies.map((tech) => (
              <ListItem key={tech.id}>
                <li>
                  <WhiteHighlight>{tech.value}</WhiteHighlight>
                </li>
              </ListItem>
            ))}
          </List>
        </motion.div>
        <motion.div
          className='col-lg-4 text-center'
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
    </div>
  );
};

const ImageBox = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  margin-bottom: 15rem;
  border-radius: 50%;

  z-index: 2;
  &:hover::before {
    top: 10%;
    left: 10%;
  }
  &:hover::after {
    background-color: transparent;
  }
  &::before {
    position: absolute;
    content: " ";
    z-index: 1;
    height: 100%;
    width: 100%;
    border: 2px solid ${colors.primary};
    top: 20%;
    left: 20%;
    border-radius: 50%;
    transition: all 0.3s ease-in;
  }
  &::after {
    position: absolute;
    content: " ";
    z-index: 4;
    height: 100%;
    width: 100%;
    background-color: ${colors.primaryLight};
    top: 0;
    left: 0;
    border-radius: 50%;
    transition: all 0.3s ease-in;
  }
`;
const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 3;
  top: 0;
  left: 0;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  /* list-style-type: "</> "; */
  color: ${colors.dim};
  & div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
  & li {
    font-size: 1rem;
  }
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
`;
export default About;
