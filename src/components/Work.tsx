import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Text from "../shared/Text";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import colors from "../constants/colors";
import works from "../constants/works";

interface Props {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  stacks: string[];
}
const Work = () => {
  return (
    <div className='my-5' id='work'>
      <Header>some things i've built</Header>
      <List>
        {works.map((work) => (
          <ListItem
            key={work.id}
            title={work.title}
            description={work.description}
            githubUrl={work.githubUrl}
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
  githubUrl,
  liveUrl,
  stacks,
}) => {
  return (
    <li>
      <Head className='text-capitalize'>{title}</Head>
      <Text>{description}</Text>
      <div className='d-flex gap-4'>
        {githubUrl !== "" && (
          <a href={githubUrl} rel='noreferrer' target='_blank'>
            <FaGithub size={20} color={colors.primary} />
          </a>
        )}

        <a href={liveUrl} rel='noreferrer' target='_blank'>
          <FaExternalLinkAlt size={20} color={colors.primary} />
        </a>
      </div>
      <Stack className='d-flex gap-2 flex-wrap'>
        {stacks.map((stack) => (
          <span key={stack}>{stack}</span>
        ))}
      </Stack>
    </li>
  );
};

const List = styled.ul`
  color: ${colors.dim};
  & li {
    list-style-type: "</> ";
    max-width: 700px;
    border-bottom: 1px solid ${colors.primary};
    margin-bottom: 3rem;
  }
`;
const Head = styled.h5`
  color: ${colors.light};
`;
const Stack = styled.div`
  color: ${colors.primary};
  margin-top: 1rem;
  & span {
    font-size: 1rem;
  }
`;
export default Work;
