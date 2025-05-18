import styled from "styled-components"
import portraitImg from "/src/assets/images/TavanThiry.webp"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => (
  <SocialIcons>
    <IconLink 
    href="https://github.com/T-Thiry" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="GitHub"
    >
      <FaGithub />
    </IconLink>
    <IconLink 
    href="https://www.linkedin.com/in/tavanthiry" 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label="LinkedIn"
    >
      <FaLinkedin />
    </IconLink>
  </SocialIcons>
);

const FooterSection = ({ title }) => (
  <Section>
    <Title>Let's Talk</Title>
    <Image src={portraitImg} alt="Portrait of Tavan Thiry, a frontend developer and UX/UI designer" width="100px" height="100px"/>
    <Content>
      <ProfileName>Tavan Thiry</ProfileName>
      <Contact>
          <Text as="a" href="tel:+46707916107"> +46707916107</Text>
          <Text as="a" href="mailto:tavan.thiry@gmail.com">tavan.thiry@gmail.com</Text>
      </Contact>
      <SocialLinks />
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
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    padding: 2rem 1rem;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      padding: 3rem 1.5rem;
    }
    `;

  const Title = styled.h3`
    font-size: ${(props) => props.theme.fontSizes.headingMedium.mobile};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    margin-bottom: 1rem;
  
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: ${(props) => props.theme.fontSizes.headingMedium.tablet};
    }
    
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      font-size: ${(props) => props.theme.fontSizes.headingMedium.desktop};
    }
    `;

  const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      width: 140px;
      height: 140px;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      width: 160px;
      height: 160px;
    }
  `;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }
  `;

const ProfileName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};

  @media (min-width:  ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const Text = styled.span`
  display: block;
  margin: 0.4rem 0;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Contact = styled.div`
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const IconLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    cursor: pointer;
  }
  
  @media (min-width:  ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1.75rem;
  }
`;

export default FooterSection
