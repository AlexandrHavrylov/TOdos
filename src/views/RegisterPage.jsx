import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { regUser } from "redux/auth/authActions";
import { AuthForm } from "./styled/Pages.styled";
import { AuthInput } from "./styled/Pages.styled";
import { AuthTitle } from "./styled/Pages.styled";
import { AuthBtn } from "./styled/Pages.styled";

export default function RegisterPage() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [shoudShowPassword, setShoudShowPassword] = useState(false);

  const dispatch = useDispatch();

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
    dispatch(regUser(user));
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <>
      <AuthTitle>Пожалуйста, зарегистрируйтесь</AuthTitle>
      <AuthForm action="register" onSubmit={handleSubmit}>
        <AuthInput
          size="small"
          label="Имя"
          id="fullWidth"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

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
        <AuthBtn type={"submit"}>Зарегистрироватся</AuthBtn>
      </AuthForm>
    </>
  );
}
