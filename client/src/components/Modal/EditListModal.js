import { useState } from "react";
import Modal from "./Modal";
import { AddItemForm } from "../Forms/AddItemForm";
import { EditListForm } from "../Forms/EditListFrom";

export function EditListModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
    <button onClick={openModal}>Edit</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditListForm/>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}
