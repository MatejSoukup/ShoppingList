import { useContext } from "react";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";

export function Member({item}){
    const { handleDeleteMember, isOwner } = useContext(ShoppingListContext);
    return(
        <div key={item.id}>
          <div>{item.email}</div>

          <div>
            {isOwner() ? (
              <button onClick={() => handleDeleteMember(item.id)}>Kick</button>
            ) : (
              <></>
            )}
          </div>
        </div>
    )
}