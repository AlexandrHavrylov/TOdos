import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  border-bottom: 1px black solid;
  padding: 24px;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: right;
`;

export const NavItem = styled.li`
  :first-of-type {
    margin-right: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: blue;
  }
`;

export const LoggedContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExitBtn = styled.button`
  font-size: 16px;
  cursor: pointer;
  margin: 0;
  padding: 5px;
  border: none;
  background-color: inherit;
`;
