import React, { useEffect, useState } from "react";
import "./App.css"; // Ensure you have your CSS file imported
import { Detail } from "./pages/Detail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { List } from "./pages/List";
import UserProvider from "./components/Providers/UserProvider";
import ShoppingListProvider from "./components/Providers/ShoppingListProvider";


function App() {
  const [darkMode, setDarkMode] = useState(false); // Create dark mode state

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle function
  };

  useEffect(() => {
    // Set the data-theme attribute based on darkMode state
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  return (
    <div className="App"> {/* No need to apply class for dark mode here */}
      <BrowserRouter>
        <UserProvider>
          <ShoppingListProvider>
            <button onClick={() => toggleDarkMode()}>Mode</button>
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