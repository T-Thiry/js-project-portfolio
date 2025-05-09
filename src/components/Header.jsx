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
  background-color: #ffffff;

  @media (max-width: 480px) {
   display: none;
  }
  `

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width 800px;
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
  color: #1e1e1e;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: "";
`

export default Header
