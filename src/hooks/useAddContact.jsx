import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Notiflix from "notiflix";

const addContact = async ({ name, number }) => {
  const { data } = await axios.post(`/contacts`, { name, number });
  return data;
};

export const useCreateContact = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isSuccess } = useMutation(addContact, {
    onSuccess() {
      queryClient.invalidateQueries("/contacts");
      Notiflix.Notify.success("Контакт успешно добавлен");
    },
    onError() {
      Notiflix.Notify.failure("Ошибка");
    },
  });

  return {
    createContact: mutateAsync,
    isSuccess,
  };
};
