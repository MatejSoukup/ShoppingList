import { useContext, useState } from "react";
import { CreateListModal } from "../Modal/CreateListModal";
import { Profile } from "./Profile";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { ReactComponent as Visibility } from "../../Assets/visibility.svg";
import { ReactComponent as Create } from "../../Assets/addCircle.svg";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export function ControlPanel() {
  const [createListModalOpen, setCreateListModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const openItemModal = () => setCreateListModalOpen(true);
  const closeItemModal = () => setCreateListModalOpen(false);
  const { showArchived, setShowArchived } = useContext(ShoppingListContext);
  
  const { t } = useTranslation(); // Initialize translation function

  return (
    <div className="centred">
      <div className="controlPanel">
        <div onClick={() => setShowArchived(!showArchived)}>
          <Visibility />
        </div>
        <div onClick={() => openItemModal()}>
          <Create />
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {t('profile')} {/* Translated text for Profile */}
        </div>
        <CreateListModal
          isModalOpen={createListModalOpen}
          closeModal={closeItemModal}
        />
      </div>

      {menuOpen ? <Profile /> : <></>}
    </div>
  );
}