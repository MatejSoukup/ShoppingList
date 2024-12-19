import Modal from "./Modal";
import { AddListForm } from "../Forms/AddListForm";

export function CreateListModal({ closeModal , isModalOpen}) {
  

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddListForm/>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}
