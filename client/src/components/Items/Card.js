import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export function Card({ list }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isOwner, handleDelete, setCurrentList, handleArchive } =
    useContext(ShoppingListContext);
  
  const { t } = useTranslation(); // Initialize translation function

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
        <div className="itemCount">{t('items')} {list.itemList.length}</div>
      </div>

      {isOwner(list) && (
        <>
          <button className="menu-button" onClick={toggleMenu}>{t('menu')}</button>
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
                  {t('delete')}
                </li>
                <li
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent card click on menu action
                    handleArchive(list.id);
                  }}
                >
                  {t('archive')}
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}