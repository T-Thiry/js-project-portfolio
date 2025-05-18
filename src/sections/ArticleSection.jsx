import ArticleCard from "../components/ArticleCard"
import styled from "styled-components"
import StorytellingImg from "../assets/images/Storytelling.webp";
import CollaborationImg from "../assets/images/Collaboration.webp";
import PromtingImg from "../assets/images/AI_Prompts.webp";

const articles = [
  {
    img: StorytellingImg,
    title: "Turning Pages: Empowering Financial Literacy through storytelling",
    text: "This article explores how storytelling can simplify complex financial concepts, making them more relatable and engaging. By using narratives, users can better understand and apply financial knowledge in their daily lives.",
    button: "Read Article",
    buttonLink: "https://example.com",
  },
  {
    img: CollaborationImg,
    title: "Building Bridges: Connecting Developers and Designers through collaboration",
    text: "This article examines how effective collaboration between developers and designers can lead to user-friendly web experiences with seamless communication and mutual understanding in creating cohesive digital products.",
    button: "Read Article",
    buttonLink: "https://example.com",
  },
  {
    img: PromtingImg,
    title: "Prompting Perfection: How AI Is Revolutionizing UX/UI Design",
    text: "This article delves into how crafting the right prompts can help designers generate design concepts, optimize user interfaces, and enhance content creation, ultimately streamlining workflows and delivering more personalized user experiences.",
    button: "Read Article",
    buttonLink: "https://example.com",
  },
];

const ArticleSection = () => {
  return (
    <Section>
      <SectionTitle>My Articles</SectionTitle>
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
    </Section>
  );
};


const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.headingLarge.mobile};
  font-weight: ${(props) => props.theme.fontWeights.Bold};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => props.theme.fontSizes.headingLarge.tablet};
  }
  
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    font-size: ${(props) => props.theme.fontSizes.headingLarge.desktop};
  }
`;

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
`;


export default ArticleSection
