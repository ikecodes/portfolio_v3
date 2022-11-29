import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Text from "../shared/Text";
import colors from "../constants/colors";
import works from "../constants/works";
import { motion } from "framer-motion";
import { FaCodeBranch, FaEye } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  clientUrl: string;
  serverUrl: string;
  liveUrl: string;
  stacks: string[];
}
const Work = () => {
  return (
    <div className='my-5' id='work'>
      <Header>some projects i've worked on</Header>
      {/* <Ps>
        Please note the content for some of these have not been updated, but all
        funtionalities work.
      </Ps> */}
      <List>
        {works.map((work) => (
          <ListItem
            key={work.id}
            title={work.title}
            description={work.description}
            clientUrl={work.clientUrl}
            serverUrl={work.serverUrl}
            liveUrl={work.liveUrl}
            stacks={work.stacks}
          />
        ))}
      </List>
    </div>
  );
};

const ListItem: React.FC<Props> = ({
  title,
  description,
  clientUrl,
  serverUrl,
  liveUrl,
  stacks,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <Head className='text-capitalize'>{title}</Head>
      <Text>{description}</Text>
      <div className='d-flex gap-4'>
        {clientUrl !== "" && (
          <a href={clientUrl} rel='noreferrer' target='_blank'>
            <FaCodeBranch size={15} color={colors.primary} />
            <span>client</span>
          </a>
        )}
        {serverUrl !== "" && (
          <a href={serverUrl} rel='noreferrer' target='_blank'>
            <FaCodeBranch size={15} color={colors.primary} />
            <span>api</span>
          </a>
        )}

        <a href={liveUrl} rel='noreferrer' target='_blank'>
          <FaEye size={20} color={colors.primary} />
          {/* <span>live</span> */}
        </a>
      </div>
      {/* <Stack className='d-flex gap-2 flex-wrap'>
        {stacks.map((stack) => (
          <span key={stack}>{stack}</span>
        ))}
      </Stack> */}
    </motion.li>
  );
};

const List = styled.ul`
  color: ${colors.dim};
  /* margin: 0;
  padding: 0; */
  & li {
    list-style: decimal-leading-zero;
    max-width: 700px;
    border-bottom: 1px solid ${colors.primary};
    /* background-color: ${colors.box}; */
    margin-bottom: 3rem;
    padding: 1rem;
    & a {
      text-decoration: none;
      color: ${colors.primary};
    }
    & span {
      font-size: 0.8rem;
      margin-left: 0.2rem;
      /* text-transform: capitalize; */
    }
  }
`;
const Head = styled.h4`
  color: ${colors.light};
`;
// const Stack = styled.div`
//   color: ${colors.primary};
//   margin-top: 1rem;
//   & span {
//     font-size: 1rem;
//   }
// `;
// const Ps = styled.p`
//   font-size: 0.7rem;
// `;
export default Work;
