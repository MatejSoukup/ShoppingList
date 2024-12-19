import UserProvider from "../components/Providers/UserProvider";
import ShoppingListProvider from "../components/Providers/ShoppingListProvider";
import { ShoppingListDetail } from "../components/Details/ShoppingListDetail";
import { ControlPanel } from "../components/Nav/ControlPanelDetail";

export function Detail() {
  return (
    <div>
      <ShoppingListDetail />
      <ControlPanel />
    </div>
  );
}
