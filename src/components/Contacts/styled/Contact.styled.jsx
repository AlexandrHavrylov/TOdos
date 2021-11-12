import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoadingButton from "@mui/lab/LoadingButton";

export const ContactStyled = styled.li`
  display: block;
  width: 30%;

  padding: 12px;
  text-align: center;
  border: 0.1px #eeeeee solid;
  border-radius: 25px;
  box-shadow: 0px 5px 5px -5px rgba(29, 30, 30, 0.6);

  &:hover {
    transform: scale(1.02);
  }
`;

export const UserIcon = styled(AccountCircleIcon)`
  width: 60px;
  height: 60px;
`;

export const DeleteButton = styled(LoadingButton)`
  margin-top: 5px;
  color: black;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    color: #cf3131;
  }
`;
