import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { logInUser } from "redux/auth/authActions";
import { AuthBtn } from "./styled/Pages.styled";
import { AuthTitle } from "./styled/Pages.styled";
import { AuthForm, AuthInput } from "./styled/Pages.styled";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const [shoudShowPassword, setShoudShowPassword] = useState(false);

  const passwordShowHandler = (e) => {
    e.preventDefault();
    shoudShowPassword
      ? setShoudShowPassword(false)
      : setShoudShowPassword(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(user));
    setUser({ email: "", password: "" });
  };

  return (
    <>
      <AuthTitle>Пожалуйста, войдите в свой аккаунт</AuthTitle>
      <AuthForm action="login" onSubmit={handleSubmit}>
        <AuthInput
          size="small"
          label="Почта"
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <AuthInput
          id="filled-adornment-password"
          label="Пароль"
          size="small"
          type={shoudShowPassword ? "text" : "password"}
          name="password"
          value={user.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={passwordShowHandler}
                >
                  {shoudShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <AuthBtn type={"submit"}>Войти</AuthBtn>
      </AuthForm>
    </>
  );
}
