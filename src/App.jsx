import GlobalStyles from "./styles/GlobalStyles"
import Header from "./components/Header"
import IntroSection from "./sections/IntroSection"
import TechSection from "./sections/TechSection"
import ProjectSection from "./sections/ProjectSection"

export const App = () => {
  return (
    <>
    <GlobalStyles />
    <Header />
    <IntroSection />
    <TechSection />
    <ProjectSection />
    </>
  )
}

export default App
