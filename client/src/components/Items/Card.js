import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { Menu } from "../Menu/Menu";

export function Card({ list }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isOwner, handleDelete, setCurrentList, handleArchive } =
    useContext(ShoppingListContext);

  function reRoute() {
    setCurrentList(list);
    navigate(`detail/${list.id}`);
  }

  function toggleMenu(event) {
    event.stopPropagation(); // Prevents the menu button click from triggering the card click
    setMenuOpen(!menuOpen);
  }

  return (
    <div
      className="card"
      onClick={reRoute}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <div className="cardContent">
        <div>{list.name}</div>
        <div className="itemCount">Items: {list.itemList.length}</div>
      </div>

      {isOwner(list) && (
        <>
          <button className="menu-button" onClick={toggleMenu}>Menu</button>
          {menuOpen && (
            <div className="menu">
              <ul>
                <li
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent card click on menu action
                    handleDelete(list.id);
                    setMenuOpen(false);
                  }}
                >
                  Delete
                </li>
                <li
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent card click on menu action
                    handleArchive(list.id);
                  }}
                >
                  Archive
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
