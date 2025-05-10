import ProjectCard from "../components/ProjectCard"
import styled from "styled-components"

const projects = [
    {
        img: "./src/assets/images/Weather_App.png",
        title: "Weather App",
        text: "An interactive weather app that fetches real-time data from a weather API, allowing users to search any city and view current conditions, temperature, and forecasts.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "OpenWeather API"],
    },
    {
        img: "./src/assets/images/Creative_Collabs_Website.png",
        title: "Creative Collabs Website",
        text: "A platform that showcases designer workshops and developer hackathons for creatives and coders to discover and join events.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["CSS", "HTML"],
    },
    {
        img: "./src/assets/images/Web_Accessibility_Quiz.png",
        title: "Web Accessibility Quiz",
        text: "A quiz to help users test their knowledge of inclusive design principles in a quick and engaging way.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "Accessibility"],
    },
    {
        img: "./src/assets/images/Sustainability_Housing.png",
        title: "Sustainable Housing Simulation",
        text: "Interactive simulation exploring eco-friendly housing through scenarios focused on energy efficiency and smart design.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["UX design", "UX research", "UI design", "Accessibility"],
        },
    ];

const ProjectSection = () => {
return (
  <Section>
    <SectionTitle>My Projects</SectionTitle>
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
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

export default ProjectSection
