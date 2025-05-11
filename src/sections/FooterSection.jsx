import styled from "styled-components"
import portraitImg from "/src/assets/images/TavanThiry.webp"


const FooterSection = ({ title }) => (
  <Section>
  <Image src={portraitImg} alt="Portrait of Tavan Thiry, a frontend developer and UX/UI designer"/>
  <Content>
  <Title>Tavan Thiry</Title>
  <Contact>
      <Text as="a" href="tel:+46707916107"> +46707916107</Text>
      <Text as="a" href="mailto:tavan.thiry@gmail.com">tavan.thiry@gmail.com</Text>
  </Contact>
  </Content>
  </Section>
  )

  const Section = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #1e1e1e;
    color: #ffffff;
    padding: 2rem 1rem;

    @media (min-width: 768px) {
      padding: 3rem 1.5rem;
    }

    @media (min-width: 1024px) {
        padding: 4rem 2rem;
      }
    `;

  const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      width: 140px;
      height: 140px;
    }
  `;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  `;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Text = styled.span`
  display: block;
  margin: 0.4rem 0;
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Contact = styled.div`
  margin-top: 0.6rem;
  text-align: center;
`;

export default FooterSection
