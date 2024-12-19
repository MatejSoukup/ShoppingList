import React, { useState, useContext } from "react";
import { ShoppingListContext } from "../Providers/ShoppingListProvider";
import { UserContext } from "../Providers/UserProvider";

export function AddListForm() {
  const { loggedInUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [members, setMembers] = useState([]);
  const { handleCreate } = useContext(ShoppingListContext); // Assuming you have a method to add an item

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let newList = {
      id: "abc", // Empty ID
      name: name, // Empty name
      owner: loggedInUser, // Empty owner object
      state: "active", // State can still be defined as "active" or any default state
      itemList: [], // Empty item list
      memberList: [], // Empty member list
    };

    // Call the addItem function with the new item's name
    handleCreate(newList);

    // Reset the form field
    setName("");
    setMembers([]);
  };

  const handleAddMember = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setMembers((prevLists) => [...prevLists, memberEmail]);
    // Call the addItem function with the new item's name

    // Reset the form field
    setMemberEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">List Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Make this field required
          />
        </div>
        <button type="submit">Add list</button>
      </form>
    </div>
  );
}
