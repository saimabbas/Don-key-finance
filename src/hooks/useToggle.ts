import { tuplify } from "helpers";
import { useCallback, useState } from "react";

export const useToggle = (val = false) => {
  const [isModalOpen, setIsModalOpen] = useState(val);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const toggleModal = useCallback(() => {
    setIsModalOpen((val) => !val);
  }, []);
  return tuplify(isModalOpen, openModal, closeModal, toggleModal);
};
