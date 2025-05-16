import styled from "styled-components"

const skillsData = [
  {
    category: "Code Craft 🛠️",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Version Control"]
  },
  {
    category: "My Dev Tools 🎒",
    skills: ["Visual Studio Code", "Chrome DevTools", "Git/Github", "CodePen","Netlify", "Figma"]
  },
  {
    category: "Collab Tools 🔗",
    skills: ["Asana", "Trello", "Miro", "Notion", "Slack", "Zoom"]
  },
  {
    category: "Methods 🎨",
    skills: ["Agile Methodology", "Mob Programming", "Pair Programming", "Testing", "User Research", "Design Thinking"]
  },
  {
    category: "Languages 🇸🇪",
    skills: ["Swedish", "English", "Kurdish", "Spanish"]
  },
];


  const SkillsCard = () => {
    return (
      <SkillsSection>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsWrapper>
          {skillsData.map((group, index) => (
            <CategoryWrapper key={index}>
              <CategoryTitle>{group.category}</CategoryTitle>
              <SkillsList>
                {group.skills.map((skill, i) => (
                  <SkillItem key={i}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </CategoryWrapper>
          ))}
        </SkillsWrapper>
      </SkillsSection>
    );
  };

const SkillsSection = styled.section`
  width: 100%;
  background-color:${(props) => props.theme.breakpoints.tablet};
  padding: 2rem 0;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 3rem 0;
    margin: 60px 0;
  }

  @media (min-width: 1024px) {
    padding: 4rem 0;
    margin-top: 100px;
}
`

const SkillsTitle = styled.h2`
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
   font-size: 1.75rem;
   margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 1.75rem;
   }
`

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`

const CategoryWrapper = styled.div`
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 12px;
  width: 100%;
  max-width: 260px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`

const CategoryTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  color: #ffffff;
  padding: 0.2rem 1rem;
  margin-bottom: 1rem;
  text-align: center;
  border: 1px solid #ffffff;
  border-radius: 8px;
`

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.25rem;
  width: 100%;
`

const SkillItem = styled.div`
  font-size: 1rem;
   color: #ffffff;
`

export default SkillsCard
