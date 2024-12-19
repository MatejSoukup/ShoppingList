import { useContext } from "react";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { ItemList } from "../Lists/ItemList";
import { useNavigate } from "react-router-dom";
import { EditListModal } from "../Modal/EditListModal";
import { UserContext } from "../Providers/UserProvider";

export function ShoppingListDetail() {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const { currentList, handleLeave, isOwner } = useContext(ShoppingListContext);

  return (
    <div>
      {currentList ? (
        <>
          <div className="detailHeader">
            <h1>{currentList.name}</h1>
            {isOwner(currentList) ? <EditListModal /> : <></>}
            {isOwner(currentList) ? (
              <></>
            ) : (
              <button onClick={() => (handleLeave(), navigate("/"))}>
                Leave
              </button>
            )}
          </div>
          <ItemList list={currentList.itemList} />
        </>
      ) : (
        <p>No additional data provided.</p>
      )}
    </div>
  );
}
