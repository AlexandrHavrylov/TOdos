import React from "react";
import ContactsList from "components/Contacts/ContactsList";
import { useSelector } from "react-redux";
import axios from "axios";
import AddContactForm from "components/Contacts/AddContactForm";
import { Title } from "./styled/Pages.styled";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export default function MainPage() {
  const state = useSelector((state) => state.auth);
  token.set(state.token);

  return (
    <>
      <Title>Телефонная книга</Title>

      <AddContactForm />
      <ContactsList />
    </>
  );
}
