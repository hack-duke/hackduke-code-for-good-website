import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import classes from './Header.scss'

// <Nav pullRight>
//   <a className={classes.applyButton} eventKey={1} href={'http://www.google.com'}>Apply Now </a>
// </Nav>

export const Header = () => (
  <div>
    <Navbar inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem className={classes.navItem} eventKey={1} href={'#about'}>ABOUT</NavItem>
          <NavItem className={classes.navItem} eventKey={2} href={'#tracks'}>TRACKS</NavItem>
          <NavItem className={classes.navItem} eventKey={3} href={'#faq'}>FAQS</NavItem>
          <NavItem className={classes.navItem} eventKey={4} href={'#sponsors'}>SPONSORS</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
