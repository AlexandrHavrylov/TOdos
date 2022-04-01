import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const Title = styled.h1`
  text-align: center;
`;

export const AuthForm = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  align-items: center;
`;

export const AuthInput = styled(TextField)`
  width: 350px;
  margin-bottom: 15px;
`;

export const AuthTitle = styled.h2`
  text-align: center;
`;

export const AuthBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  padding: 10px;
  background-color: inherit;
  border: 1px gray solid;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;
