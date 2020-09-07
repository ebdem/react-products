import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/">First React App</NavbarBrand>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/ebdem">GitHub</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>aaaaaaa-{this.props.cart.length}</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>SELAM CANIM</NavbarText>
        </Navbar>
      </div>
    );
    }
    }
