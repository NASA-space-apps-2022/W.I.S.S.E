/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// react-router
import { useHistory } from 'react-router-dom';

// imgs
import logo from "./logo_nav.png"

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="" tag={Link}>
                {/* <h1> FutureSphere </h1> */}
                <b  style={{"font-size": "2rem"}}> W.I.S.S.E </b>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      W.I.S.S.E
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                 <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/NASA-space-apps-2022"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>

                </Nav>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  {/* Problematica 1 */}
                  <NavItem>
                    <NavLink
                      className=""
                      href="#WhatStings"
                    >

                      WHAT STINKS?  <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  {/* Problematica 2 */}
                  <NavItem>
                    <NavLink
                      className=""
                      href="#FloodOfChanges"
                    >
                      A FLOOD OF CHANGES <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  {/* Problematica 3 */}
                  <NavItem>
                    <NavLink
                      className=""
                      href="#IFollowRivers"
                    >
                      I FOLLOW RIVERS
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className=""
                      href="#games"
                    >
                      GAMES! <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
