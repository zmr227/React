import React, { Component } from "react";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoRefresh,
  SearchInfoList,
  SearchInfoItem,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

import { actionCreators } from "./store";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">Home</NavItem>
          <NavItem className="left">Download</NavItem>

          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <FontAwesomeIcon
              className={
                this.props.focused ? "focused searchIcon" : "searchIcon"
              }
              icon={faSearch}
            />
            {this.getSearchInfo(this.props.focused)}
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

  getSearchInfo(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            Hot Topics
            <SearchInfoRefresh>Refresh</SearchInfoRefresh>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>Test</SearchInfoItem>
            <SearchInfoItem>Test</SearchInfoItem>
            <SearchInfoItem>Test</SearchInfoItem>
            <SearchInfoItem>Test</SearchInfoItem>
            <SearchInfoItem>Test</SearchInfoItem>
            <SearchInfoItem>Test</SearchInfoItem>
            <SearchInfoItem>Test</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    // have to use getter to get value of immutable object
    focused: state.get("header").get("focused"),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.SearchFocused());
    },
    handleInputBlur() {
      dispatch(actionCreators.SearchBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
