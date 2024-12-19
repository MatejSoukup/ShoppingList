import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { useNavigate } from "react-router-dom";
import { Card } from "../Items/Card";

export default function CardList() {
  const navigate = useNavigate();

  const { shoppingLists , showArchived } = useContext(ShoppingListContext);

  console.log(shoppingLists);

  return (
      <div className="cardList">
        {shoppingLists.map((list) => (
          (showArchived || list.state === "active") && (
            <Card list={list} />
          )
          
        ))}
      </div>
  );
}
