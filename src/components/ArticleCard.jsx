import styled from "styled-components"

const ArticleCard = ({ img, title, text, button }) => (
    <Card>
    <Image src={img} alt={title} width="600" height="300"/>
    <Content>
    <Title>{title}</Title>
    <Text>{text}</Text>
      <Button>{button}</Button>
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

  @media (min-width: 768px) {
    padding: 1rem;
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
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
  padding: 0 1rem;

   @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;


  @media (min-width: 1024px) {
    width: 50%;
    height: 400px;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
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

  export default ArticleCard
