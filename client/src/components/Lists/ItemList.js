import { useContext } from "react";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { Item } from "../Items/Item";


export function ItemList({ list }) {
    const {handleDeleteItem , showFulfilled ,setShowFulfilled , handleUpdateItem} = useContext(ShoppingListContext)
  return list ? (
    <div className="detailCard">
        {list.map((item) =>
                (showFulfilled || item.status === "unfulfilled") && (
                  <Item key={item.id} item={item}/>
                )
            )}
    </div>
  ) : (
    <p>No items in this list.</p>
  );
}
