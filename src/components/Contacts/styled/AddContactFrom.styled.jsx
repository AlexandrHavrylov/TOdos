import styled from "@emotion/styled";

import AddIcon from "@mui/icons-material/Add";
import { TextField } from "@mui/material";

export const AddContainer = styled.div`
  padding-top: 10px;
  height: ${(props) => (props.isOpen ? "55px" : "0px")};
  overflow: hidden;
  transition: height, 0.7s;
`;

export const StyledAddIcon = styled(AddIcon)`
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
  transition: transform, 0.7s;
  &:hover {
    color: ${(props) => (props.isOpen ? "red" : "green")};
  }
`;

export const Input = styled(TextField)`
  margin-right: 25px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;
