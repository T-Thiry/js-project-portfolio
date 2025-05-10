import styled from "styled-components"

const ProjectSection = () => {
  return (
    <Section>
      <Title>My Projects</Title>

      <ProjectCard
        img="https://via.placeholder.com/400x200"
        title="Weather App"
        text="An interactive weather app that fetches real-time data from a weather API, allowing users to search any city and view current conditions, temperature, and forecasts."
        buttonOneText="View Demo"
        buttonTwoText="View Code"
      />

      <ProjectCard
        img="https://via.placeholder.com/400x200"
        title="Creative Collabs Website"
        text="A platform that showcases designer workshops and developer hackathons for creatives and coders to discover and join events."
        buttonOneText="View Demo"
        buttonTwoText="View Code"
      />

      <ProjectCard
        img="https://via.placeholder.com/400x200"
        title="Web Accessibility Quiz"
        text="A quiz to help users test their knowledge of inclusive design principles in a quick and engaging way."
        buttonOneText="View Demo"
        buttonTwoText="View Code"
      />

      <ProjectCard
        img="https://via.placeholder.com/400x200"
        title="Sustainable Housing Simulation"
        text="Interactive simulation exploring eco-friendly housing through scenarios focused on energy efficiency and smart design."
        buttonOneText="View Demo"
        buttonTwoText="View Code"
      />
    </Section>
  )
}

export default ProjectSection
