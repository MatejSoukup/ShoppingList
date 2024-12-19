import "./App.css";
import { Detail } from "./pages/Detail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { List } from "./pages/List";
import UserProvider from "./components/Providers/UserProvider";
import ShoppingListProvider from "./components/Providers/ShoppingListProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ShoppingListProvider>
            <Routes>
              <Route path="/" element={<List />} />
              <Route path="detail/:id" element={<Detail />} />
            </Routes>
          </ShoppingListProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
