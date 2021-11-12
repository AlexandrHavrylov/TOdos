import { useCreateContact } from "hooks/useAddContact";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { AddContainer } from "./styled/AddContactFrom.styled";
import { StyledAddIcon } from "./styled/AddContactFrom.styled";
import { Input } from "./styled/AddContactFrom.styled";
import { Form } from "./styled/AddContactFrom.styled";
import { useFetchAllContacts } from "hooks/useGetAllContacts";
import Notiflix from "notiflix";

export default function AddContactForm() {
  const { createContact } = useCreateContact();
  const { contacts } = useFetchAllContacts();

  const [user, setUser] = useState({
    name: "",
    number: "",
  });

  const findDublicate = (user) => {
    return contacts.some((contact) => contact.name === user.name);
  };

  const [isAddFormOpened, setIsAddFormOpened] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.currentTarget;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    findDublicate(user)
      ? Notiflix.Notify.failure(`${user.name} уже есть в списке контактов`)
      : createContact(user);
    setUser({
      name: "",
      number: "",
    });
  };

  return (
    <>
      <p>
        Добавить новый контакт{" "}
        <IconButton
          onClick={() => setIsAddFormOpened(isAddFormOpened ? false : true)}
          type={"button"}
          aria-label="add"
          size="large"
        >
          <StyledAddIcon isOpen={isAddFormOpened} />
        </IconButton>
      </p>

      <AddContainer isOpen={isAddFormOpened}>
        <Form onSubmit={handleSubmit}>
          <Input
            size="small"
            label="Имя"
            id="fullWidth"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <Input
            size="small"
            label="Номер телефона"
            type="text"
            name="number"
            value={user.number}
            onChange={handleChange}
          />

          <IconButton type={"submit"} aria-label="add" size="large">
            <StyledAddIcon />
          </IconButton>
        </Form>
      </AddContainer>
    </>
  );
}
