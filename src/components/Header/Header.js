import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'
import classes from './Header.scss'

export const Header = () => (
  <div>
    <Navbar inverse fixedtop>
    <Navbar.Header>
      <Navbar.Brand>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem className={classes.navItem} eventKey={1} href="#">ABOUT</NavItem>
        <NavItem className={classes.navItem} eventKey={2} href="#">TRACKS</NavItem>
        <NavItem className={classes.navItem} eventKey={2} href="#">FAQS</NavItem>
        <NavItem className={classes.navItem} eventKey={2} href="#">SPONSORS</NavItem>
      </Nav>
      <Nav pullRight>
        <a className={classes.applyButton} eventKey={1} href="#">Apply Now </a>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
)

export default Header
