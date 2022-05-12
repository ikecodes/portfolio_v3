import React from "react";
import urls from "../constants/urls";
import Container from "../layouts/Container";
import Header from "../shared/Header";
import LinkHighlight from "../shared/LinkHighlight";

const Contact = () => {
  return (
    <Container>
      <div className='my-5' id='contact'>
        <Header>get in touch</Header>
        <div className='my-5'>
          <div className='d-flex gap-5 flex-wrap'>
            <div className='mb-2'>
              <LinkHighlight lg text='github' link={urls.github} />
            </div>
            <div className='mb-2'>
              <LinkHighlight lg text='linkedin' link={urls.linkedin} />
            </div>
            <div className='mb-2'>
              <LinkHighlight lg text='twitter' link={urls.twitter} />
            </div>
            <div className='mb-2'>
              <LinkHighlight lg text='email' link={urls.email} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
