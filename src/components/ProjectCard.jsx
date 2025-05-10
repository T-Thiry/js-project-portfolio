import styled from "styled-components"
import webIcon from "/src/assets/Images/Web_Icon.svg";
import githubIcon from "/src/assets/Images/Github_Icon.svg";


const ProjectCard = ({ img, title, tags, text, buttonOneText, buttonTwoText, reverse }) => (
    <Card $reverse={reverse}>
    <Image src={img} alt={title}/>
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

  @media (min-width: 768px) {
    padding: 1rem;
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
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
  padding: 0 1rem;

   @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  object-fit: cover;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: #1e1e1e;
  margin: 0.6rem 0;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  color: #1e1e1e;
  margin: 0 0 2rem 0;
  font-size: 1rem;
  font-weight: 400;

  @media (min-width: 768px){
    font-size: 1.125rem;
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
  line-height: 1rem;
  flex: 1;
  padding: 0.5rem 1rem;
  background-color: #1e1e1e;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #1e1e1e;
  }

  @media (min-width: 768px) {
    max-width: 50%;
    font-size: 1.125rem;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #ffffff;
  color: #1e1e1e;
  padding: 0.1rem 0.6rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #1e1e1e;
`;

  export default ProjectCard
