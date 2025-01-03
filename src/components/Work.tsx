import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Text from "../shared/Text";
import colors from "../constants/colors";
import works from "../constants/works";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

interface Props {
  title: string;
  description: string;
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
            liveUrl={work.liveUrl}
            stacks={work.stacks}
          />
        ))}
      </List>
    </div>
  );
};

const ListItem: React.FC<Props> = ({ title, description, liveUrl, stacks }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
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
        <motion.a
          href={liveUrl}
          style={{ marginLeft: "0.5rem" }}
          rel="noreferrer"
          target="_blank"
        >
          <BsArrowUpRight size={17} color={colors.primary} />
        </motion.a>
      </Head>

      <Text>{description}</Text>
    </motion.li>
  );
};

const List = styled.ul`
  color: ${colors.dim};
  list-style: none;
  list-style: decimal-leading-zero;
  /* padding-left: 0px; */
  & li {
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

  & li::marker {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
const Head = styled(motion.div)`
  color: ${colors.light};
  display: flex;
  align-items: center;
`;

export default Work;
