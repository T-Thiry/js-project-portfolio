import ProjectCard from "../components/ProjectCard"
import styled from "styled-components"
import TaskManagementImg from "../assets/images/TaskManagement.webp";
import HappyThoughtsImg from "../assets/images/Happy_Thoughts.webp";
import WeatherAppImg from "../assets/images/Weather_App.webp";
import CreativeCollabsImg from "../assets/images/Creative_Collabs_Website.webp";
import AccessibilityQuizImg from "../assets/images/Web_Accessibility_Quiz.webp";
import SustainabilityHousingImg from "../assets/images/Sustainability_Housing.webp";

const projects = [
    {
        img: TaskManagementImg,
        title: "ToDo Task Management",
        text: "A to-do application built with React, using Zustand for global state management and Styled Components for modular, maintainable styling. Features include task creation, completion toggling, and real-time task counters.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["JavaScript", "React", "Global State Management", "Zustand", "Styled Components"],
        liveDemoLink: "https://tthiry-todotaskmanagement.netlify.app",
        viewCodeLink: "https://github.com/T-Thiry/js-project-todo",
    },
    {
        img: HappyThoughtsImg,
        title: "Happy Thoughts App",
        text: "A cheerful social feed built with React and an external API. Users can share short, positive messages and like others’ thoughts. The app features real-time updates and promotes positivity through simple interactions.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["JavaScript", "React", "Reakt Hooks", "API"],
        liveDemoLink: "https://tthiry-happythoughts.netlify.app",
        viewCodeLink: "https://github.com/T-Thiry/js-project-happy-thoughts",
  },
    {
        img: WeatherAppImg,
        title: "Weather App",
        text: "A weather app built with JavaScript and TypeScript. It fetches real-time data from a weather API, allowing users to search any nordic city and view current conditions, temperature, and forecasts.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "API"],
        liveDemoLink: "https://nordic-weatherapp.netlify.app",
        viewCodeLink: "https://github.com/T-Thiry/newjs-project-weather-app",
    },
    {
        img: CreativeCollabsImg,
        title: "Creative Collabs Website",
        text: "A website that showcases upcoming designer workshops and developer hackathons, making it easy for creatives and coders to discover and join events. The platform features a clean layout, and responsive design for seamless browsing.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["CSS", "HTML", "Responsive Design", ],
        liveDemoLink: "https://hookitup.netlify.app",
        viewCodeLink: "https://github.com/T-Thiry/js-project-business-site",
    },
    {
        img: AccessibilityQuizImg,
        title: "Web Accessibility Quiz",
        text: "The web accessibility quiz helps users test their knowledge of inclusive design principles in a quick and engaging way. It is designed to raise awareness of common accessibility issues while encouraging best practices in web development.",
        buttonOneText: "View Demo",
        buttonTwoText: "View Code",
        tags: ["Javascript","Typescript", "CSS", "HTML", "Accessibility"],
        liveDemoLink: "https://accessibility-guiz.netlify.app",
        viewCodeLink: "https://github.com/T-Thiry/js-project-accessibility",
    },
    {
        img: SustainabilityHousingImg,
        title: "Sustainable Housing Simulation",
        text: "A simulation that explores the principles of sustainable housing through interactive scenarios that highlight energy efficiency, eco-friendly materials, and smart design choices.",
        singleButtonText: "Explore project",
        singleButtonLink: "https://example.com",
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
  font-size: ${(props) => props.theme.fontSizes.headingLarge.mobile};
  font-weight: ${(props) => props.theme.fontWeights.Bold};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media (min-width:  ${(props) => props.theme.breakpoints.tablet}) {
    font-size:  ${(props) => props.theme.fontSizes.headingLarge.tablet};
  }

  @media (min-width:  ${(props) => props.theme.breakpoints.desktop}) {
    font-size:  ${(props) => props.theme.fontSizes.headingLarge.desktop};
  }
`;

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default ProjectSection
