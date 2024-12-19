import { useContext, useState } from "react";
import { CreateListModal } from "../Modal/CreateListModal";
import { Profile } from "./Profile";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { ReactComponent as Visibility } from "../../Assets/visibility.svg";
import { ReactComponent as Create } from "../../Assets/addCircle.svg";

export function ControlPanel() {
  const [createListModalOpen, setCreateListModalOpen] = useState(false);
  const openItemModal = () => setCreateListModalOpen(true);
  const closeItemModal = () => setCreateListModalOpen(false);
  const { showArchived, setShowArchived } = useContext(ShoppingListContext);

  return (
    <div className="centred">
        <div className="controlPanel">
        <div onClick={() => setShowArchived(!showArchived)}>
        <Visibility />
      </div>
      <div onClick={() => openItemModal()}>
        <Create />
      </div>
      <CreateListModal
        isModalOpen={createListModalOpen}
        closeModal={closeItemModal}
      />
        </div>
   
      <Profile />
    </div>
  );
}
