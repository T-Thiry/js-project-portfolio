import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyles from "./styles/GlobalStyles"
import Header from "./components/Header"
import IntroSection from "./sections/IntroSection"
import TechSection from "./sections/TechSection"
import ProjectSection from "./sections/ProjectSection"
import SkillsSection from "./sections/SkillsSection"
import ArticleSection from "./sections/ArticleSection"
import FooterSection from "./sections/FooterSection"


export const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <IntroSection />
    <TechSection />
    <ProjectSection />
    <SkillsSection />
    <ArticleSection />
    <FooterSection />
    </ThemeProvider>
    </>
  )
}

export default App
