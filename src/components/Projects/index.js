import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  Divider
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects in ML, DL & NLP.
        </Desc>

        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>

        <Divider />
      </Wrapper>
    </Container>
  );
};

export default Projects;
