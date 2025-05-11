import styled from "styled-components"
import portraitImg from "/src/assets/images/TavanThiry.webp"

 const IntroSection = () => {
  return (
    <Section id="home">
      <IntroContent>
        <Paragraph>Hi there, I am</Paragraph>
        <MediumHeading>Tavan Thiry</MediumHeading>
        <LargeHeadingGroup>
          <LargeHeading>Frontend Developer</LargeHeading>
          <LargeHeading>UX/UI Designer</LargeHeading>
        </LargeHeadingGroup>
        <Paragraph>
          A Frontend Developer with a background in UX/UI design. I make sure design and functionality go hand in hand. My strength lies in bridging the gap between code and design, helping to create smoother processes and better products.
        </Paragraph>
        </IntroContent>
      <ImageContainer>
        <Image
          src={portraitImg}
          alt="Portrait of Tavan Thiry, a frontend developer and UX/UI designer"
        />
      </ImageContainer>
    </Section>
  )
}

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  `

const IntroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media (min-width: 768px {
    align-items: flex-start;
    text-align: left;
    padding: 2rem;
  }
`

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

const MediumHeading = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  color: #1e1e1e;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`
const LargeHeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0 1rem 0;
  `

const LargeHeading = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.25rem;
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
