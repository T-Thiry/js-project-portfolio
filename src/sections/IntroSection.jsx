import styled from "styled-components"
import { Helmet } from "react-helmet";
import portraitImg from "/src/assets/images/TavanThiry.webp"

 const IntroSection = () => {
  return (
    <>
    <Helmet>
      <link rel="preload" as="image" href={portraitImg} />
    </Helmet>
      <Section id="home">
        <IntroContent>
          <Paragraph>Hi there, I am</Paragraph>
          <MediumHeading>Tavan Thiry</MediumHeading>
          <LargeHeadingGroup>
            <LargeHeading>Web Developer</LargeHeading>
            <LargeHeading>UX/UI Designer</LargeHeading>
          </LargeHeadingGroup>
          <Paragraph>
            A Web Developer with a background in UX/UI design. I make sure design and functionality go hand in hand. My strength lies in bridging the gap between code and design, helping to create smoother processes and better products.
          </Paragraph>
          </IntroContent>
        <ImageContainer>
          <Image
            src={portraitImg}
            alt="Portrait of Tavan Thiry, a frontend developer and UX/UI designer"
            width={325}
            height={350}
            loading="eager"
          />
        </ImageContainer>
      </Section>
    </>
  )
}

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width:${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: center;
    margin-top: 0rem;
  }
  `

const IntroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-start;
    text-align: left;
    padding: 2rem;
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    text-align: left;
  }
`

const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.body};
  max-width: 600px;
 

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size:${(props) => props.theme.fontSizes.large};
  }
`

const MediumHeading = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.headingSmall.mobile};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.accent};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.headingSmall.tablet};
  
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fontSizes.headingSmall.desktop};
  }
  }
`
const LargeHeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0 1rem 0;
  `

const LargeHeading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.headingXLarge.mobile};
  font-weight: ${(props) => props.theme.fontWeights.Bold};
  line-height: ${(props) => props.theme.lineHeights.heading};
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.headingXLarge.tablet};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.headingXLarge.desktop};
  }
`

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem;
  min-height: 350px;
`

const Image = styled.img`
  width: 100%;
  height: auto;
  min-height: 350px;
  max-width: 325px;
  border-radius: 3rem;
  object-fit: cover;
`;

export default IntroSection
