import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "redux/auth/authActions";
import { LoggedContainer } from "./Navigation.styled";
import { ExitBtn } from "./Navigation.styled";
import { Nav } from "./Navigation.styled";

import { NavList, NavItem, StyledNavLink } from "./Navigation.styled";

export default function Navigation() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const userName = useSelector(({ auth }) => auth.user.name);

  return (
    <header>
      <Nav>
        {!isLoggedIn && (
          <NavList>
            <NavItem>
              <StyledNavLink to={"/register"}>Регистрация</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to={"/login"}>Аутентификация</StyledNavLink>
            </NavItem>{" "}
          </NavList>
        )}
        {isLoggedIn && (
          <LoggedContainer>
            <p>
              Приветствуем, <b>{userName}</b>
            </p>
            <ExitBtn type={"button"} onClick={() => dispatch(logOutUser())}>
              Выйти
            </ExitBtn>
          </LoggedContainer>
        )}
      </Nav>
    </header>
  );
}
