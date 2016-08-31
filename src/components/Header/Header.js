import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <Navbar inverse fixedTop={true}>
    <Navbar.Collapse>
      <Nav>
        <NavItem href="#">ABOUT</NavItem>
        <NavItem className={classes.navItem} href="#">TRACKS</NavItem>
        <NavItem className={classes.navItem} href="#">FAQS</NavItem>
        <NavItem className={classes.navItem} href="#">SPONSORS</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem href="#">Apply Now</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
)

export default Header
