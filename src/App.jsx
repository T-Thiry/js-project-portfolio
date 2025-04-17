import "./App.css"
import { TechCard, ArticleCard, ProjectCard, SkillsCard } from "./components/Card";


const App = () => {
  return (
    <>
      <h4>Hi there, I am</h4>
      <h3>Tavan Thiry</h3>
      <h1>Fronted Developer</h1>
      <h1>UX/UI Designer</h1>
      <p>A Frontend Developer with a background in UX/UI design. I bring a user-centered mindset to every line of code, making sure design and functionality go hand in hand. My strength lies in bridging the gap between code and design, helping to create smoother processes and better products.</p>
      <TechCard 
      title="Tech"
      text="HTML, CSS, JavaScript, ES6, JSX, TypeScript, React, React Hooks,  
      Node.js,  Mongo DB, APIs, Git, GitHub, Web Accessibility (WCAG). "
      />
      <ProjectCard 
      title="Weather App"
      text="An interactive weather app that fetches real-time data from a weather API, allowing users to search any city and view current conditions, temperature, and forecasts. The app features a clean, responsive UI with dynamic icons and background changes based on weather conditions."
      />
      <ProjectCard 
      title="Creative Collabs Website"
      text="A website that showcases upcoming designer workshops and developer hackathons, making it easy for creatives and coders to discover and join events. The platform features a clean layout, and responsive design for seamless browsing."
      />
      <ProjectCard 
      title="Web Accessibility Quiz"
      text="The web accessibility quiz helps users test their knowledge of inclusive design principles in a quick and engaging way. It is designed to raise awareness of common accessibility issues while encouraging best practices in web development."
      />
      <ProjectCard 
      title="Sustainable Houlsing Simulation"
      text="A simulation that explores the principles of sustainable housing through interactive scenarios that highlight energy efficiency, eco-friendly materials, and smart design choices."
      />
      <SkillsCard 
      title="Skills"
      />
      <ArticleCard 
      title="Empowering Financial Literacy through storytelling"
      text="This article explores how storytelling can simplify complex financial concepts, making them more relatable and engaging. By using narratives, users can better understand and apply financial knowledge in their daily lives."
      />
      <ArticleCard 
      title="Building Bridges: Connecting Developers and Designers through collaboration"
      text="This article examines how effective collaboration between developers and designers can lead to user-friendly web experiences with seamless communication and mutual understanding in creating cohesive digital products."
      />
      <ArticleCard 
      title="Prompting Perfection: How AI Is Revolutionizing UX/UI Design"
      text="This article delves into how crafting the right prompts can help designers generate design concepts, optimize user interfaces, and enhance content creation, ultimately streamlining workflows and delivering more personalized user experiences. "
      />
    </>
    
  )
}

export default App