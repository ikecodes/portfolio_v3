import React from "react";
import urls from "../constants/urls";
import Container from "../layouts/Container";
import Header from "../shared/Header";
import LinkHighlight from "../shared/LinkHighlight";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="my-5"
        id="contact"
      >
        <Header>get in touch</Header>
        <div className="my-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-3">
                  <div className="mb-5">
                    <LinkHighlight lg text="github" link={urls.github} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="mb-5">
                    <LinkHighlight lg text="linkedin" link={urls.linkedin} />
                  </div>
                </div>
                {/* <div className='col-lg-3'>
                  <div className='mb-5'>
                    <LinkHighlight lg text='twitter' link={urls.twitter} />
                  </div>
                </div> */}
                <div className="col-lg-3">
                  {" "}
                  <div className="mb-5">
                    <LinkHighlight lg text="email" link={urls.email} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Contact;
