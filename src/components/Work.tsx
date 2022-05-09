import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Text from "../shared/Text";
import WhiteHighlight from "../shared/WhiteHighlight";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
}
const Work = () => {
  return (
    <div className='my-5'>
      <Header>some things i've built</Header>
      <List>
        {/* FIRST */}
        <ListItem>
          <h4 className='text-capitalize'>spid realty</h4>
          <Text>
            Spid Realty is a real estate, housing and investment company. I
            designed and developed the companies web application. Agents signup
            and can post properties for sale or rent. Tech stack include{" "}
            <WhiteHighlight>React</WhiteHighlight>,{" "}
            <WhiteHighlight>Typescript</WhiteHighlight>,{" "}
            <WhiteHighlight>Bootstrap</WhiteHighlight>,{" "}
            <WhiteHighlight>Styled-Components</WhiteHighlight> on the front-end
            & <WhiteHighlight>Node.js/Express</WhiteHighlight>,{" "}
            <WhiteHighlight>MongoDb</WhiteHighlight> for the back-end.
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://www.spidrealty.com'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={25} color={colors.primary} />
            </a>
            <a
              href='https://github.com/ikecodes/spidRealty_frontend'
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={25} color={colors.primary} />
            </a>
          </div>
        </ListItem>
        {/* SECOND */}
        <ListItem>
          <h4 className='text-capitalize'>grooming endownment trust</h4>
          <Text>
            This is a Trust fund Organisation. Features include grant
            application and updates, blog. Also comes with a custom dashboard
            designed by me for CRUD operations on the admin side. Tech stack
            include <WhiteHighlight>React</WhiteHighlight>,{" "}
            <WhiteHighlight>Bootstrap</WhiteHighlight>,{" "}
            <WhiteHighlight>Styled-Components</WhiteHighlight> on the front-end
            & <WhiteHighlight>Firebase</WhiteHighlight>, for the back-end.
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://github.com/ikecodes/grooming_endowment_trust'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={25} color={colors.primary} />
            </a>
            <a
              href='https://www.groomingendowment.org/home'
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={25} color={colors.primary} />
            </a>
          </div>
        </ListItem>
        {/* THIRD */}
        <ListItem>
          <h4 className='text-capitalize'>xaron technologies</h4>
          <Text>
            Xaron technologies solves the problem of delievery services in
            Nigeria, did some work here on the front-end using{" "}
            <WhiteHighlight>React</WhiteHighlight>, but my major work here was
            on the backend using{" "}
            <WhiteHighlight>Node.js/Express</WhiteHighlight>,{" "}
            <WhiteHighlight>SocketIO</WhiteHighlight> &{" "}
            <WhiteHighlight>Mongoose</WhiteHighlight>. I was able to implement
            real-time location tracking of riders, authenticaation, order
            request and delivery etc.
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://github.com/ikecodes/xaron_backend'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={25} color={colors.primary} />
            </a>
            <a href='https://xaron-tech.com/' rel='noreferrer' target='_blank'>
              <FaExternalLinkAlt size={25} color={colors.primary} />
            </a>
          </div>
        </ListItem>
        {/* FOURTH */}
        <ListItem>
          <h4 className='text-capitalize'>buzzline.App</h4>
          <Text>
            Buzzline is a Customer Relationship Management (CRM) application for
            small business owners. I did work on the front-end using{" "}
            <WhiteHighlight>React-Native</WhiteHighlight>. Worked on and
            implemented features which includes messaging, language
            translations, in-app purchases using revenue cart. Also worked on
            the server-side using{" "}
            <WhiteHighlight>Node.js/Express</WhiteHighlight>
          </Text>
          <div className='d-flex gap-4'>
            {/* <a href='#e' rel='noreferrer' target='_blank'>
              <FaGithub size={25} color={colors.primary} />
            </a> */}
            <a
              href='https://www.buzzline.app/'
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={25} color={colors.primary} />
            </a>
          </div>
        </ListItem>
        {/* FIFTH */}
        <ListItem>
          <h4 className='text-capitalize'>broadcast nigeria</h4>
          <Text>
            E-commerce web app for the sale of various sound equipments.
            Implemented the front-end using{" "}
            <WhiteHighlight>React</WhiteHighlight>,{" "}
            <WhiteHighlight>Redux</WhiteHighlight>. With{" "}
            <WhiteHighlight>Node.js/Express</WhiteHighlight> for the back-end
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://github.com/ikecodes/broadcast-nigeria_frontend'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={25} color={colors.primary} />
            </a>
            <a
              href='https://broadcastnigeria.vercel.app/'
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={25} color={colors.primary} />
            </a>
          </div>
        </ListItem>
      </List>
    </div>
  );
};

const ListItem: React.FC<Props> = ({ children }) => {
  return <li>{children}</li>;
};

const List = styled.ul`
  list-style-type: "▶ ";
  list-style-position: outside;
  list-style-image: none;
  & li {
    max-width: 700px;
    margin-bottom: 3rem;
  }
`;
export default Work;
