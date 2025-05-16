import styled from "styled-components"

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#aboutme">About Me</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  )
}


const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  background-color:${(props) => props.theme.colors.secondary};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
   display: none;
  }
  `

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width 800px;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    max-width: 1000px;  /* max width on large screens */
  }
  `

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  `

const NavItem = styled.li`
  position: relative;
`

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-decoration: none;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: color 0.4s ease;


  &:hover {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
     font-size: ${(props) => props.theme.fontSizes.large};
  }
`

export default Header
