import styled from 'styled-components';
import HtmlLogo from '../assets/images/HTML_Logo.svg';
import CssLogo from '../assets/images/CSS_Logo.svg';
import JavascriptLogo from '../assets/images/Javascript_Logo.svg';
import TypescriptLogo from '../assets/images/Typescript_Logo.svg';
import ReactLogo from '../assets/images/React_Logo.svg';
import GithubLogo from '../assets/images/Github_Logo.svg';
import FigmaLogo from '../assets/images/Figma_Logo.svg';
import NotionLogo from '../assets/images/Notion_Logo.svg';
import AsanaLogo from '../assets/images/Asana_Logo.svg';
import SlackLogo from '../assets/images/Slack_Logo.svg';

const TechSection = () => {
  return (
    <Section>
      <ContentWrapper>
      <Heading>Tech</Heading>
      <IconGrid>
        <IconWrapper><img src={HtmlLogo} alt="HTML logo"/></IconWrapper>
        <IconWrapper><img src={CssLogo} alt="CSS logo"/></IconWrapper>
        <IconWrapper><img src={JavascriptLogo} alt="Javascript logo"/></IconWrapper>
        <IconWrapper><img src={TypescriptLogo} alt="Typescript logo"/></IconWrapper>
        <IconWrapper><img src={ReactLogo} alt="React logo"/></IconWrapper>
        <IconWrapper><img src={GithubLogo} alt="Github logo"/></IconWrapper>
        <IconWrapper><img src={FigmaLogo} alt="Figma logo"/></IconWrapper>
        <IconWrapper><img src={NotionLogo} alt="Notion logo"/></IconWrapper>
        <IconWrapper><img src={AsanaLogo} alt="Asana logo"/></IconWrapper>
        <IconWrapper><img src={SlackLogo} alt="Slack logo"/></IconWrapper>
      </IconGrid>
      <Paragraph>
       HTML, CSS, JavaScript, ES6, JSX, TypeScript, React, React Hooks, Node.js,  Mongo DB, APIs, Git, GitHub, Mob Programming, Pair Programming, Web Accessibility (WCAG).
      </Paragraph>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;
  background-color:${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  margin: 2rem 0;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 5rem 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 6rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.headingLarge.mobile};
  text-align: center;
  margin-bottom: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.headingLarge.tablet};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fontSizes.headingLarge.desktop};
  }
`;

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
  padding: 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-wrap: nowrap;
    gap: 1rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
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

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 46px;
    height: 46px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
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
  font-size: ${(props) => props.theme.fontSizes.small};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: ${(props) => props.theme.lineHeights.body};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

export default TechSection;
