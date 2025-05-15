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
        text: "An interactive weather app that fetches real-time data from a weather API, allowing users to search any city and view current conditions, temperature, and forecasts. The app features a clean, responsive UI with dynamic icons and background changes based on weather conditions.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "API"],
    },
    {
        img: CreativeCollabsImg,
        title: "Creative Collabs Website",
        text: "A website that showcases upcoming designer workshops and developer hackathons, making it easy for creatives and coders to discover and join events. The platform features a clean layout, and responsive design for seamless browsing.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["CSS", "HTML", "Responsive Design", ],
    },
    {
        img: AccessibilityQuizImg,
        title: "Web Accessibility Quiz",
        text: "The web accessibility quiz helps users test their knowledge of inclusive design principles in a quick and engaging way. It is designed to raise awareness of common accessibility issues while encouraging best practices in web development.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "Accessibility"],
    },
    {
        img: SustainabilityHousingImg,
        title: "Sustainable Housing Simulation",
        text: "A simulation that explores the principles of sustainable housing through interactive scenarios that highlight energy efficiency, eco-friendly materials, and smart design choices.",
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

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  background-color: #ffffff;
`;

export default ProjectSection
