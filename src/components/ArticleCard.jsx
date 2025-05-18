import styled from "styled-components"

const ArticleCard = ({ 
  img, 
  title, 
  text, 
  button,
  buttonLink, 
}) => (
    <Card>
    <Image 
    src={img} 
    alt={title} 
    width="600" 
    height="300"/>
    <Content>
    <Title>{title}</Title>
    <Text>{text}</Text>
      <Button
      as="a"
      href={buttonLink}
      target="_blank"
      rel="noopener noreferrer"
      >
      {button}
      </Button>
    </Content>
    </Card>
  )

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
    flex-direction: row;
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
  max-width: 600px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;


  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 50%;
    height: 400px;
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
  font-weight: ${(props) => props.theme.fontWeights.regular};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}){
    font-size: ${(props) => props.theme.fontSizes.large};
  }
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
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.small};
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 50%;
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

  export default ArticleCard
