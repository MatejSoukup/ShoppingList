import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { Menu } from "../Menu/Menu";
export function Card({ list }) {
  const navigate = useNavigate();

  const [menuOpen , setMenuOpen] = useState(false)
  const { isOwner, handleDelete, setCurrentList , handleArchive } =
    useContext(ShoppingListContext);
  function reRoute() {
    setCurrentList(list);
    navigate(`detail/${list.id}`);
  }
  return (
    <div >
      <div className="card">
        <div onClick={() => reRoute()}>
          {list.name}
        </div>
        {isOwner(list) ? (
          <>
             <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
                   {menuOpen ? <Menu>
                        <ul>
                            <li onClick={() => (handleDelete(list.id), setMenuOpen(false))}>
                                Delete
                            </li>
                            <li onClick={() => handleArchive(list.id)}>
                               Archive 
                            </li>
                        </ul>
                   </Menu> : <></>}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
