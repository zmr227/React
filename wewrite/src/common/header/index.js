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
import { CSSTransition } from "react-transition-group";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? "focused" : ""}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
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

  handleInputFocus() {
    this.setState({
      focused: true,
    });
  }

  handleInputBlur() {
    this.setState({
      focused: false,
    });
  }
}

export default Header;
