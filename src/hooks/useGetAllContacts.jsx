import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const getContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

export const useFetchAllContacts = () => {
  const { data, isLoading } = useQuery("/contacts", getContacts);

  return {
    contacts: data,
    isLoading,
  };
};
