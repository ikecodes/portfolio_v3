import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Text from "../shared/Text";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import colors from "../constants/colors";

interface Props {
  children: React.ReactNode;
}
const Work = () => {
  return (
    <div className='my-5' id='work'>
      <Header>some things i've built</Header>
      <List>
        {/* /////////// */}
        <ListItem>
          <h4 className='text-capitalize'>grooming endownment trust</h4>
          <Text>
            This is a Trust fund web app. Features include grant application and
            updates, blog. Also comes with a custom dashboard designed by me for
            CRUD operations on the admin side.
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://github.com/ikecodes/grooming_endowment_trust'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={20} color={colors.primary} />
            </a>
            <a
              href='https://www.groomingendowment.org/home'
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={20} color={colors.primary} />
            </a>
          </div>
          <Stack className='d-flex gap-2 flex-wrap'>
            <span>React</span>
            <span>Bootstrap</span>
            <span>Styled-Components</span>
            <span>Firebase</span>
          </Stack>
        </ListItem>
        {/* /////////// */}
        <ListItem>
          <h4 className='text-capitalize'>spid realty</h4>
          <Text>
            Spid Realty is a real estate, housing and investment company. I
            designed and developed the companies web application. Agents signup
            and can post properties for sale or rent.
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://github.com/ikecodes/spidRealty_frontend'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={20} color={colors.primary} />
            </a>
            <a
              href='https://www.spidrealty.com '
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={20} color={colors.primary} />
            </a>
          </div>
          <Stack className='d-flex gap-2 flex-wrap'>
            <span>React</span>
            <span>Typescript</span>
            <span>Bootstrap</span>
            <span>Styled-Components</span>
            <span>Node.js/Express</span>
            <span>MongoDb</span>
          </Stack>
        </ListItem>

        {/* /////////// */}
        <ListItem>
          <h4 className='text-capitalize'>xaron technologies</h4>
          <Text>
            Xaron technologies solves delievery services problem in Nigeria.
            Worked on the front-end using react, but my major work here was on
            the backend. I was able to implement real-time location tracking of
            riders, authenticaation, order request and delivery etc.
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://github.com/ikecodes/xaron_backend'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={20} color={colors.primary} />
            </a>
            <a href='https://xaron-tech.com/' rel='noreferrer' target='_blank'>
              <FaExternalLinkAlt size={20} color={colors.primary} />
            </a>
          </div>
          <Stack className='d-flex gap-2 flex-wrap'>
            <span>React</span>
            <span>Bootstrap</span>
            <span>Socket.io</span>
            <span>Node.js/Express</span>
            <span>Mongoose</span>
          </Stack>
        </ListItem>
        {/* /////////// */}
        <ListItem>
          <h4 className='text-capitalize'>buzzline.App</h4>
          <Text>
            Buzzline is a Customer Relationship Management (CRM) application for
            small business owners. I did work on the front-end using React
            Native. Worked on and implemented features which includes messaging,
            language translations, in-app purchases & subscriptions using
            revenuecat.
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://www.buzzline.app/'
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={20} color={colors.primary} />
            </a>
          </div>
          <Stack className='d-flex gap-2 flex-wrap'>
            <span>React Native</span>
            <span>Node.js/Express</span>
            <span>MongoDb/Mongoose</span>
          </Stack>
        </ListItem>
        {/* /////////// */}
        <ListItem>
          <h4 className='text-capitalize'>broadcast nigeria</h4>
          <Text>
            E-commerce web app for the sale of various sound equipments.
            Features include authentication, adding to cart, payment gateways
            etc
          </Text>
          <div className='d-flex gap-4'>
            <a
              href='https://github.com/ikecodes/broadcast-nigeria_frontend'
              rel='noreferrer'
              target='_blank'
            >
              <FaGithub size={20} color={colors.primary} />
            </a>
            <a
              href='https://broadcastnigeria.vercel.app/'
              rel='noreferrer'
              target='_blank'
            >
              <FaExternalLinkAlt size={20} color={colors.primary} />
            </a>
          </div>
          <Stack className='d-flex gap-2 flex-wrap'>
            <span>React</span>
            <span>Redux</span>
            <span>CSS modules</span>
            <span>Node.js/Express</span>
            <span>MongoDb</span>
          </Stack>
        </ListItem>
      </List>
    </div>
  );
};

const ListItem: React.FC<Props> = ({ children }) => {
  return <li>{children}</li>;
};

const List = styled.ul`
  & li {
    max-width: 700px;
    border-bottom: 1px solid ${colors.primary};
    margin-bottom: 3rem;
  }
`;
const Stack = styled.div`
  color: ${colors.primary};
  margin-top: 1rem;
  & span {
    font-size: 1rem;
  }
`;
export default Work;
