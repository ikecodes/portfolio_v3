import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Text from "../shared/Text";
import colors from "../constants/colors";
import works from "../constants/works";
import { motion } from "framer-motion";
import { FaCodeBranch, FaLink } from "react-icons/fa";

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
    <div className="my-5" id="works">
      <Header>works</Header>
      <List>
        {works.map((work, i) => (
          <ListItem
            key={i}
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
      <Head>
        <a
          href={liveUrl}
          rel="noreferrer"
          target="_blank"
          className="text-capitalize"
        >
          {title}
        </a>
        <a
          href={liveUrl}
          style={{ marginLeft: "0.5rem" }}
          rel="noreferrer"
          target="_blank"
        >
          <FaLink size={17} color={colors.primary} />
        </a>
      </Head>

      <Text>{description}</Text>
      <div className="d-flex gap-4">
        {clientUrl !== "" && (
          <a href={clientUrl} rel="noreferrer" target="_blank">
            <FaCodeBranch size={15} color={colors.primary} />
            <span>client</span>
          </a>
        )}
        {serverUrl !== "" && (
          <a href={serverUrl} rel="noreferrer" target="_blank">
            <FaCodeBranch size={15} color={colors.primary} />
            <span>api</span>
          </a>
        )}
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
  & li {
    list-style: decimal-leading-zero;
    max-width: 700px;
    margin-bottom: 3rem;
    padding: 1rem;

    & a {
      font-size: 1.5rem;
      text-decoration: none;
      color: ${colors.primary};
    }
    & span {
      font-size: 0.8rem;
      margin-left: 0.2rem;
    }
  }
`;
const Head = styled.div`
  color: ${colors.light};
  display: flex;
  align-items: center;
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
