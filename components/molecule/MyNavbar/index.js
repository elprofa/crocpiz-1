import React, { useState } from 'react'
import NavBarStc from './Navbar.stc'
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

const MyNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarStc>
      <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">CROCPIZ</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav m-auto" navbar>
            <NavItem>
              <NavLink href="/">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/menu">Menu</NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink href="">Contact</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>
              <Link href="/">
                <a>
                    Call us now
                </a>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
      </Container>
    </NavBarStc>
  );
}

export default MyNavbar;