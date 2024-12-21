import { useState } from "react";
import Modal from "./Modal";
import { AddItemForm } from "../Forms/AddItemForm";
import { EditListForm } from "../Forms/EditListFrom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export function EditListModal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation(); // Initialize translation function

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <button onClick={openModal}>{t('edit')}</button> {/* Translated text for Edit button */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditListForm />
        <button onClick={closeModal}>{t('close')}</button> {/* Translated text for Close button */}
      </Modal>
    </>
  );
}