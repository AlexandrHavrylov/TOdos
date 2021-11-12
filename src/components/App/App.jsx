import Navigation from "components/Navigation/Navigation";
import LoginPage from "views/LoginPage";
import MainPage from "views/MainPage";
import RegisterPage from "views/RegisterPage";
import { Route, Switch } from "react-router";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { MainContainer } from "./App.styled";

function App() {
  return (
    <>
      <Navigation />
      <MainContainer>
        <Switch>
          <PrivateRoute path="/" exact redirectTo="/login">
            <MainPage />
          </PrivateRoute>
          <PublicRoute path="/register" exact restricted redirectTo="/">
            <RegisterPage />
          </PublicRoute>
          <PublicRoute path="/login" exact restricted redirectTo="/">
            <LoginPage />
          </PublicRoute>
        </Switch>
      </MainContainer>
    </>
  );
}

export default App;
