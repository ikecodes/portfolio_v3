import React from "react";
import styled from "styled-components";
import Me from "../assets/images/me.jpeg";
import colors from "../constants/colors";
import Container from "../layouts/Container";
import Header from "../shared/Header";
import Text from "../shared/Text";

const About = () => {
  return (
    <Container>
      <div>
        <Header>about me</Header>
        <div className='row justify-content-start align-items-center'>
          <div className='col-lg-8 mb-5'>
            <Text>
              Hello! My name is Onuorah Emmanuel Ikechukwu and I enjoy building
              and making things work on the internet. My interest in software
              development started back in 2019 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog
              button taught me a lot about HTML & CSS!
            </Text>
            <Text>
              Fast-forward to today, and I’ve had the privilege of working at a
              number of companies including start-ups and huge corporations.
              I've also had the opportunity to work on several projects as a
              freelancer.
            </Text>
            <Text>
              I have gained strong experience building user friendly and
              accessible front-end of web and mobile applications using react
              and react native respectively. I also have good background in
              building solid and scalable backend for applications using Node.js
            </Text>
            <Text>Here are a few technologies I use frequently:</Text>
            <List>
              <ListItem>
                {/* <span>▶♨</span> */}
                <span>🔥</span>
                <li>Javascript</li>
              </ListItem>
              <ListItem>
                <span>🔥</span>
                <li>TypeScript</li>
              </ListItem>
              <ListItem>
                <span>🔥</span>
                <li>React</li>
              </ListItem>
              <ListItem>
                <span>🔥</span>
                <li>React Native</li>
              </ListItem>
              <ListItem>
                <span>🔥</span>
                <li>Node.js/Express</li>
              </ListItem>
              <ListItem>
                <span>🔥</span>
                <li>MongoDb/Mongoose</li>
              </ListItem>
            </List>
          </div>
          <div className='col-lg-4 text-center'>
            <ImageBox>
              <Image src={Me} />
            </ImageBox>
          </div>
        </div>
      </div>
    </Container>
  );
};

const ImageBox = styled.div`
  position: relative;
  height: 15rem;
  width: 15rem;
  margin-bottom: 10rem;
  z-index: 2;
  &:hover::before {
    top: 10%;
    left: 10%;
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
    transition: all 0.3s ease-in;
  }
`;
const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 100;
  top: 0;
  left: 0;
`;
const List = styled.ul`
  list-style: none;
  font-size: 1rem;
  color: ${colors.dim};
  & div:not(:last-child) {
    margin-bottom: 1rem;
  }
  & li {
    font-size: 1.2rem;
  }
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  & span {
    color: ${colors.primary};
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;
export default About;
