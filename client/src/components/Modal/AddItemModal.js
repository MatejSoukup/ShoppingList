import Modal from "./Modal";
import { AddItemForm } from "../Forms/AddItemForm";

export function AddItemModal({ closeModal , isModalOpen}) {
  

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddItemForm/>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}
