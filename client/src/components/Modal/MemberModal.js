import { useContext } from "react";
import Modal from "./Modal";
import { MemberList } from "../Lists/MemberList";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { AddMemberForm } from "../Forms/AddMemberForm";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export function MemberModal({ closeModal, isModalOpen }) {
  const { currentList, isOwner } = useContext(ShoppingListContext);
  const { t } = useTranslation(); // Initialize translation function

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MemberList list={currentList.memberList} />
        {currentList && isOwner(currentList) ? <AddMemberForm /> : <></>}
        <button onClick={closeModal}>{t('close')}</button> {/* Translated text for Close button */}
      </Modal>
    </>
  );
}