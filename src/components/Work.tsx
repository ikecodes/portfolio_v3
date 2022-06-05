import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import Text from "../shared/Text";
import { IoMdEye, IoMdCode } from "react-icons/io";
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
      <Ps>
        Please note the content for some of these have not been updated, but all
        funtionalities work.
      </Ps>
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
            <IoMdCode size={15} color={colors.primary} />
            <span>code</span>
          </a>
        )}

        <a href={liveUrl} rel='noreferrer' target='_blank'>
          <IoMdEye size={15} color={colors.primary} />
          <span>live</span>
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
  margin: 0;
  padding: 0;
  & li {
    list-style: none;
    max-width: 700px;
    border-bottom: 1px solid ${colors.primary};
    background-color: ${colors.box};
    margin-bottom: 3rem;
    padding: 1rem;
    & a {
      text-decoration: none;
      color: ${colors.primary};
    }
    & span {
      font-size: 0.8rem;
      margin-left: 0.2rem;
      text-transform: capitalize;
    }
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
const Ps = styled.p`
  font-size: 0.7rem;
`;
export default Work;
