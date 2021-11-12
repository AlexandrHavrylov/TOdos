import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Notiflix from "notiflix";

const deleteContact = async (id) => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteContact, {
    onSuccess() {
      queryClient.invalidateQueries("/contacts");
      Notiflix.Notify.success("Контакт удалён");
    },
  });

  return {
    deleteContact: mutateAsync,
    isDeliting: isLoading,
  };
};
