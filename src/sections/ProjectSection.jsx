import ProjectCard from "../components/ProjectCard"
import styled from "styled-components"
import WeatherAppImg from "../assets/images/Weather_App.webp";
import CreativeCollabsImg from "../assets/images/Creative_Collabs_Website.webp";
import AccessibilityQuizImg from "../assets/images/Web_Accessibility_Quiz.webp";
import SustainabilityHousingImg from "../assets/images/Sustainability_Housing.webp";

const projects = [
    {
        img: WeatherAppImg,
        title: "Weather App",
        text: "An interactive weather app that fetches real-time data from a weather API, allowing users to search any city and view current conditions, temperature, and forecasts.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "OpenWeather API"],
    },
    {
        img: CreativeCollabsImg,
        title: "Creative Collabs Website",
        text: "A platform that showcases designer workshops and developer hackathons for creatives and coders to discover and join events.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["CSS", "HTML", "Responsive Design", ],
    },
    {
        img: AccessibilityQuizImg,
        title: "Web Accessibility Quiz",
        text: "A quiz to help users test their knowledge of inclusive design principles in a quick and engaging way.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "Accessibility"],
    },
    {
        img: SustainabilityHousingImg,
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
