import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <Route {...routeProps}>
      {!isLoggedIn ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
