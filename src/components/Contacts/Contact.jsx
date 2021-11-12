import { useDeleteContact } from "hooks/useDeleteContact";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { ContactStyled, UserIcon, DeleteButton } from "./styled/Contact.styled";

export default function Contact({ id, name, number }) {
  const { deleteContact, isDeliting } = useDeleteContact();

  return (
    <>
      <ContactStyled>
        <UserIcon />
        <p>Имя: {name}</p>
        <p>Телефон: {number}</p>

        <DeleteButton
          onClick={() => deleteContact(id)}
          loading={isDeliting}
          loadingPosition="center"
          aria-label="delete"
          size="large"
        >
          <DeleteIcon />
        </DeleteButton>
      </ContactStyled>
    </>
  );
}
