import Modal from "./Modal";
import { AddListForm } from "../Forms/AddListForm";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export function CreateListModal({ closeModal, isModalOpen }) {
  const { t } = useTranslation(); // Initialize translation function

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddListForm />
        <button onClick={closeModal}>{t('close')}</button> {/* Translated text for Close */}
      </Modal>
    </>
  );
}