import ArticleCard from "../components/ArticleCard"
import styled from "styled-components"
import StorytellingImg from "../assets/images/Storytelling.webp";
import CollaborationImg from "../assets/images/Collaboration.webp";
import PromtingImg from "../assets/images/AI_Prompts.webp";

const articles = [
    {
        img: StorytellingImg,
        title: "Empowering Financial Literacy through storytelling",
        text: "This article explores how storytelling can simplify complex financial concepts, making them more relatable and engaging. By using narratives, users can better understand and apply financial knowledge in their daily lives.",
        button: "Read Article",
    },
    {
        img: CollaborationImg,
        title: "Building Bridges: Connecting Developers and Designers through collaboration",
        text: "This article examines how effective collaboration between developers and designers can lead to user-friendly web experiences with seamless communication and mutual understanding in creating cohesive digital products.",
        button: "Read Article",
    },
    {
        img: PromtingImg,
        title: "Prompting Perfection: How AI Is Revolutionizing UX/UI Design",
        text: "This article delves into how crafting the right prompts can help designers generate design concepts, optimize user interfaces, and enhance content creation, ultimately streamlining workflows and delivering more personalized user experiences.",
        button: "Read Article",
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
 font-size: 1.5rem;
 font-weight: bold;
 color: #1e1e1e;
 text-align: center;
 margin: 30px 0;

 @media (min-width: 768px) {
   font-size: 2rem;
   margin-top: 100px;
 }
`;

const Section = styled.section`
  background-color: #ffffff;
`;


export default ArticleSection
