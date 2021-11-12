import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export default function PublicRoute({
  children,
  redirectTo,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shoudRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shoudRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
