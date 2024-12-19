import { useState, useContext } from "react";
import { AddItemModal } from "../Modal/AddItemModal";
import { MemberModal } from "../Modal/MemberModal";
import { useNavigate } from "react-router-dom";
import { Profile } from "./Profile";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { ReactComponent as ArrowBack} from "../../Assets/arrowBack.svg"
import { ReactComponent as Visibility} from "../../Assets/visibility.svg"
import {ReactComponent as Create } from "../../Assets/addCircle.svg"
import {ReactComponent as GroupAdd } from "../../Assets/groupAdd.svg"
import { Menu } from "../Menu/Menu";
export function ControlPanel() {
  const [addItemModal, setAddItemModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);
  const [menuOpen , setMenuOpen] = useState(false);

  const openItemModal = () => setAddItemModal(true);
  const closeItemModal = () => setAddItemModal(false);

  const openMemberModal = () => setMemberModal(true);
  const closeMemberModal = () => setMemberModal(false);

  const navigate = useNavigate();

  const {
    showFulfilled,
    setShowFulfilled,
  } = useContext(ShoppingListContext);
  return (
    <div className="centred">
      <AddItemModal closeModal={closeItemModal} isModalOpen={addItemModal} />
      <MemberModal closeModal={closeMemberModal} isModalOpen={memberModal} />
      <div className="controlPanel">
        <div onClick={() => navigate("/")}>
            <ArrowBack/>
        </div>
        <div onClick={() => openItemModal()}>
            <Create/>
        </div>
        <div onClick={() => openMemberModal()}>
            <GroupAdd/>
        </div>
        <div onClick={() => setShowFulfilled(!showFulfilled)}>
            <Visibility/>
        </div>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          Profile
        </div>
      </div>

      <div>
        {
          menuOpen ?
        <Profile />: <></>
        }
        
        
      </div>
    </div>
  );
}
