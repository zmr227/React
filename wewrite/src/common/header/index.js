import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: true,
    };
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download</NavItem>
          <SearchWrapper>
            <NavSearch className={this.state.focused ? "focused" : ""} />

            <FontAwesomeIcon
              className={
                this.state.focused ? "focused searchIcon" : "searchIcon"
              }
              icon={faSearch}
            />
          </SearchWrapper>
          <NavItem className="right">Login</NavItem>
          <NavItem className="right">App</NavItem>
          <Addition>
            <Button className="write">
              <FontAwesomeIcon icon={faFeatherAlt} /> Write
            </Button>
            <Button className="reg">Register</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header;
