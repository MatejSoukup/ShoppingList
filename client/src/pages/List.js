import ShoppingListProvider from "../components/Providers/ShoppingListProvider";
import UserProvider from "../components/Providers/UserProvider";
import CardList from "../components/Lists/CardList";
import { ControlPanel } from "../components/Nav/ControlPanelList";

export function List() {
  return (
    <div className="page">
      <CardList />
      <ControlPanel />
    </div>
  );
}
