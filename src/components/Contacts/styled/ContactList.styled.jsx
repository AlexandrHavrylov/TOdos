import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const ContactList = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const FilterInput = styled(TextField)`
  margin: 15px;
  width: 300px;
`;
