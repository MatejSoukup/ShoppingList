import { useContext } from "react";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { ReactComponent as Check } from "../../Assets/check.svg";
import { ReactComponent as Delete } from "../../Assets/delete.svg";

export function Item({ item }) {
  const { handleDeleteItem, handleUpdateItem } = useContext(ShoppingListContext);

  return (
    <div key={item.id} className="itemContainer">
      <div
        className="itemName"
        style={item.status === "fulfilled" ? { textDecoration: "line-through" } : {}}
      >
        {item.name}
      </div>
      <div className="itemButtons">
        <div onClick={() => handleDeleteItem(item.id)} style={{ color: "red" }}>
          <Delete />
        </div>
        <div
          onClick={() => handleUpdateItem(item.id)}
          style={{ color: item.status !== "fulfilled" ? "green" : "grey" }}
        >
          <Check />
        </div>
      </div>
    </div>
  );
}
