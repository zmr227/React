import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  height: 60px;
  border: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/",
})`
  float: left;
  top: 0;
  left: 0;
  margin-top: 5px;
  display: inline;
  width: 100px;
  height: 100%;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Nav = styled.div`
  float: left;
  width: 80%;
  height: 60px;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 60px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "Search",
})`
  width: 160px;
  height: 30px;
  margin-top: 15px;
  margin-left: 20px;
  padding: 0 32px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #777;
  }
  &.focused {
    width: 220px;
  }
  &.slide-enter {
    transition: all 0.2s ease-out;
  }

  &.slide-exit {
    transition: all 0.2s ease-out;
  }
`;

export const Addition = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  height: 60px;
`;

export const Button = styled.div`
  font-size: 17px;
  float: right;
  line-height: 38px;
  margin-top: 10px;
  margin-right: 15px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  box-sizing: border-box;

  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .searchIcon {
    position: absolute;
    bottom: 1px;
    right: 2px;
    padding: 6px;
    text-align: center;
    border-radius: 19px;
    color: #999;

    &.focused {
      background: #999;
      color: #fff;
    }
  }
`;
