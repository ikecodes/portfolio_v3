import React from "react";
import Header from "../shared/Header";
import LinkHighlight from "../shared/LinkHighlight";

const Contact = () => {
  return (
    <div className='my-5'>
      <Header>get in touch</Header>
      <div className='my-5'>
        <div className='d-flex gap-5 flex-wrap'>
          <div className='mb-2'>
            <LinkHighlight
              lg
              text='github'
              link='https://github.com/ikecodes'
            />
          </div>
          <div className='mb-2'>
            <LinkHighlight
              lg
              text='linkedin'
              link='https://www.linkedin.com/in/onuorahike/'
            />
          </div>
          <div className='mb-2'>
            <LinkHighlight
              lg
              text='twitter'
              link='https://twitter.com/ikecodes'
            />
          </div>
          <div className='mb-2'>
            <LinkHighlight lg text='email' link='mailto:ikecodes@gmail.com' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
