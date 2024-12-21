import Modal from "./Modal";
import { AddItemForm } from "../Forms/AddItemForm";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export function AddItemModal({ closeModal, isModalOpen }) {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddItemForm />
        <button onClick={closeModal}>{t('close')}</button> {/* Translated text for Close button */}
      </Modal>
    </>
  );
}