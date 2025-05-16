import styled from "styled-components"
import webIcon from "/src/assets/images/Web_Icon.svg";
import githubIcon from "/src/assets/images/Github_Icon.svg";


const ProjectCard = ({ img, title, tags, text, buttonOneText, buttonTwoText, reverse }) => (
    <Card $reverse={reverse}>
    <Image src={img} alt={title} width="600" height="400"/>
    <Content>
    {tags && (
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      )}
    <Title>{title}</Title>
    <Text>{text}</Text>
    <ButtonGroup>
      <Button>
      <IconImg src={webIcon} alt="Live demo icon" />
        {buttonOneText}</Button>
      <Button>
      <IconImg src={githubIcon} alt="View code icon" />
      {buttonTwoText}</Button>
    </ButtonGroup>
    </Content>
    </Card>
  )

const IconImg = styled.img`
  width: 22px;
  height: 22px;
  margin: 0 0.5rem;
`;

const Card = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1rem;
    margin-top: 40px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    gap: 2rem;
  }
  `;

  const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  border-radius: 12px;
  object-fit: cover;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 45%;
  }
`;

const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.headingMedium.mobile};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: ${(props) => props.theme.lineHeights.heading};
  color: ${(props) => props.theme.colors.primary};
  margin: 0.6rem 0;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.headingMedium.tablet};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fontSizes.headingMedium.desktop};
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.primary};
  margin: 0 0 2rem 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: 400;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}){
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: ${(props) => props.theme.lineHeights.body};
  flex: 1;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSizes.small};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 50%;
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color:${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.primary};
  padding: 0.1rem 0.6rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

  export default ProjectCard
