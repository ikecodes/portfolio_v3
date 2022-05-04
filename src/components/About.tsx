import React from "react";
import Me from "../assets/images/me.jpeg";
import Container from "../layouts/Container";
import Header from "../shared/Header";
import Image from "../shared/Image";
import Text from "../shared/Text";

const About = () => {
  return (
    <Container>
      <div>
        <Header>about me</Header>
        <div className='row justify-content-start align-items-center'>
          <div className='col-lg-8 mb-5'>
            <Text>
              Lorem ipsum dolor sit amet,8 consectetur adipisicing elit. Earum
              reprehenderit ut modi voluptate iure repudiandae unde qui magnam
              adipisci consequuntur eos delectus error esse, nulla ea a nemo
              architecto quod.
            </Text>
          </div>
          <div className='col-lg-3 '>
            <Image src={Me} alt='ME' h={20} unit='rem' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
