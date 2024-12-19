import { useContext, useState } from "react";
import Modal from "./Modal";
import { AddItemForm } from "../Forms/AddItemForm";
import { MemberList } from "../Lists/MemberList";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { AddMemberForm } from "../Forms/AddMemberForm";

export function MemberModal({closeModal , isModalOpen}) {
  const {currentList , isOwner} = useContext(ShoppingListContext)

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
            <MemberList list={currentList.memberList}/>
            {isOwner(currentList) ? <AddMemberForm/> : <></>}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}