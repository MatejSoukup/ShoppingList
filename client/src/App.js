import React, { useEffect, useState } from "react";
import "./App.css"; // Ensure you have your CSS file imported
import { Detail } from "./pages/Detail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { List } from "./pages/List";
import UserProvider from "./components/Providers/UserProvider";
import ShoppingListProvider from "./components/Providers/ShoppingListProvider";
import i18n from './i18n'; // Import the i18n instance

function App() {
  const [darkMode, setDarkMode] = useState(false); // Create dark mode state

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle function
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value); // Change language based on selection
  };

  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ShoppingListProvider>
            <button onClick={() => toggleDarkMode()}>Mode</button>
            <select onChange={handleLanguageChange} defaultValue={i18n.language}>
              <option value="en">English</option>
              <option value="cs">Czech</option>
            </select>
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