import styled from 'styled-components';
import htmlLogo from '../assets/images/HTML_Logo.svg';
import cssLogo from '../assets/images/CSS_Logo.svg';
import javascriptLogo from '../assets/images/JavaScript_Logo.svg';
import typescriptLogo from '../assets/images/TypeScript_Logo.svg';
import reactLogo from '../assets/images/React_Logo.svg';
import githubLogo from '../assets/images/Github_Logo.svg';
import figmaLogo from '../assets/images/Figma_Logo.svg';
import notionLogo from '../assets/images/Notion_Logo.svg';
import asanaLogo from '../assets/images/Asana_Logo.svg';
import slackLogo from '../assets/images/Slack_Logo.svg';

const TechSection = () => {
  return (
    <Section>
      <ContentWrapper>
      <Heading>Tech</Heading>
      <IconGrid>
        <IconWrapper><img src={htmlLogo} alt="HTML logo"/></IconWrapper>
        <IconWrapper><img src={cssLogo} alt="CSS logo"/></IconWrapper>
        <IconWrapper><img src={javascriptLogo} alt="Javascript logo"/></IconWrapper>
        <IconWrapper><img src={typescriptLogo} alt="TypeScript logo"/></IconWrapper>
        <IconWrapper><img src={reactLogo} alt="React logo"/></IconWrapper>
        <IconWrapper><img src={githubLogo} alt="Github logo"/></IconWrapper>
        <IconWrapper><img src={figmaLogo} alt="Figma logo"/></IconWrapper>
        <IconWrapper><img src={notionLogo} alt="Notion logo"/></IconWrapper>
        <IconWrapper><img src={asanaLogo} alt="Asana logo"/></IconWrapper>
        <IconWrapper><img src={slackLogo} alt="Slack logo"/></IconWrapper>
      </IconGrid>
      <Paragraph>
       HTML, CSS, JavaScript, ES6, JSX, TypeScript, React, React Hooks, Node.js,  Mongo DB, APIs, Git, GitHub, Web Accessibility (WCAG).
      </Paragraph>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 2rem 0;

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    gap: 1.5rem;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    width: 46px;
    height: 46px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }
  }

  @media (min-width: 1024px) {
    width: 52px;
    height: 52px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export default TechSection;
