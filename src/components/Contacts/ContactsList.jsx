import { useFetchAllContacts } from "hooks/useGetAllContacts";
import React, { useState } from "react";
import Contact from "./Contact";
import { ContactList } from "./styled/ContactList.styled";
import { FilterInput } from "./styled/ContactList.styled";

export default function ContactsList() {
  const { contacts } = useFetchAllContacts();
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    const normalizedInputValue = inputValue.trim();
    setFilter(normalizedInputValue);
  };

  const getFiltredContacts = (allContacts, filtredValue) => {
    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(filtredValue)
    );
  };

  const filtredContacts = contacts && getFiltredContacts(contacts, filter);

  return (
    <div>
      <FilterInput
        onChange={handleChange}
        size="small"
        autoComplete="off"
        label="Фильтр по имени"
        id="fullWidth"
        type="text"
        name="name"
      />
      {filtredContacts?.length > 0 ? (
        <ContactList>
          {filtredContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}{" "}
        </ContactList>
      ) : (
        <p>Контакта с таким именем нет в телефонной книге</p>
      )}
    </div>
  );
}
