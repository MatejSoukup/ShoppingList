import { useContext } from "react";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { ItemList } from "../Lists/ItemList";
import { useNavigate } from "react-router-dom";
import { EditListModal } from "../Modal/EditListModal";
import { UserContext } from "../Providers/UserProvider";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

export function ShoppingListDetail() {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const { currentList, handleLeave, isOwner } = useContext(ShoppingListContext);

  if (!currentList) {
    return <p>No additional data provided.</p>;
  }

  // Calculate "fulfilled" and "unfulfilled" items
  const fulfilledItems = currentList.itemList.filter(
    (item) => item.status === "fulfilled"
  ).length;
  const unfulfilledItems = currentList.itemList.length - fulfilledItems;

  // Data for the PieChart
  const data = [
    { name: "Fulfilled", value: fulfilledItems },
    { name: "Unfulfilled", value: unfulfilledItems },
  ];

  // Colors for the PieChart slices
  const COLORS = ["#9fcc8f", "#d4a1dc"]; // Soft green for "Fulfilled", Soft purple for "Unfulfilled"

  return (
    <div>
      <div className="detailHeader">
        <h1>{currentList.name}</h1>
        {isOwner(currentList) && <EditListModal />}
        {!isOwner(currentList) && (
          <button onClick={() => (handleLeave(), navigate("/"))}>
            Leave
          </button>
        )}
      </div>

      <div className="content-container">
        {/* Item list */}
        <div className="item-list-container">
          <ItemList list={currentList.itemList} />
        </div>

        {/* Pie chart */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
