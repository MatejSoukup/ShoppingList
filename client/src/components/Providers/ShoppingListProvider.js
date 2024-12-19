import { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "./UserProvider";

export const ShoppingListContext = createContext();

const Lists = [
  {
    id: "1",
    name: "list1",
    owner: { id: "u1", email: "u1@test.com" },
    state: "active",
    itemList: [
      { id: "1", name: "item1", status: "unfulfilled" },
      { id: "2", name: "item2", status: "unfulfilled" },
      { id: "3", name: "item3", status: "fulfilled" },
    ],
    memberList: [
      { id: "u2", email: "u2@test.com" },
      { id: "u3", email: "u3@test.com" },
    ],
  },
  {
    id: "2",
    name: "list2",
    owner: { id: "u2", email: "u2@test.com" }, // u2 is the owner of the new list
    state: "archived",
    itemList: [
      { id: "1", name: "itemA", status: "unfulfilled" },
      { id: "2", name: "itemB", status: "unfulfilled" },
      { id: "3", name: "itemC", status: "unfulfilled" },
    ],
    memberList: [{ id: "u3", email: "u3@test.com" }], // u3 is included as a member
  },
  {
    id: "3",
    name: "list3",
    owner: { id: "u2", email: "u2@test.com" }, // u2 is the owner of the new list
    state: "active",
    itemList: [
      { id: "1", name: "itemA", status: "unfulfilled" },
      { id: "2", name: "itemB", status: "unfulfilled" },
      { id: "3", name: "itemC", status: "unfulfilled" },
    ],
    memberList: [{ id: "u3", email: "u3@test.com" }], // u3 is included as a member
  },
  {
    id: "4",
    name: "list4",
    owner: { id: "u2", email: "u2@test.com" }, // u2 is the owner of the new list
    state: "active",
    itemList: [
      { id: "1", name: "itemA", status: "unfulfilled" },
      { id: "2", name: "itemB", status: "unfulfilled" },
      { id: "3", name: "itemC", status: "unfulfilled" },
    ],
    memberList: [{ id: "u3", email: "u3@test.com" }], // u3 is included as a member
  },
];

export default function ShoppingListProvider({ children }) {
  const { loggedInUser, getUserByEmail } = useContext(UserContext);

  const [shoppingLists, setShoppingLists] = useState(Lists);
  const [currentList, setCurrentList] = useState({});
  const [showFulfilled, setShowFulfilled] = useState(false);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    setCurrentList(handleLoad());
    setShoppingLists(handleLoadAll());
  }, [loggedInUser]);

  const location = useLocation();
  const { id } = useParams();

  function isOwner(list) {
    // Check if currentList and its owner are defined before accessing id
    if (!list.owner || !loggedInUser) {
      console.log(1);
      return false; // Return false if any are undefined
    }
    console.log(loggedInUser.id);
    // Using optional chaining to safely access owner.id
    return loggedInUser.id === list.owner.id;
  }

  function handleLoadAll() {
    const filteredList = Lists.filter((shoppingList) => {
      // Check if the logged-in user is the owner or a member of the shopping list
      const isOwner = shoppingList.owner.id === loggedInUser.id; // Adjust if owner is a string
      const isMember = shoppingList.memberList.some(
        (member) => member.id === loggedInUser.id
      );
      return isOwner || isMember;
    });
    return filteredList;
  }

  function handleLoad() {
    let list = location.state;

    list = shoppingLists.find((shoppingList) => shoppingList.id === id);
    return list ? list : `Shopping list with ID ${id} not found.`;
  }
  function handleDeleteItem(id) {
    setCurrentList((current) => {
      const itemIndex = current.itemList.findIndex((item) => item.id === id);

      // If the item is not found, return the current state unmodified
      if (itemIndex === -1) {
        console.log("Item not found");
        return current;
      }

      // Create a new array excluding the item at itemIndex
      const updatedItemList = [
        ...current.itemList.slice(0, itemIndex),
        ...current.itemList.slice(itemIndex + 1),
      ];

      // Return a new object with the updated itemList
      return { ...current, itemList: updatedItemList };
    });
  }

  function handleDeleteMember(id) {
    setCurrentList((current) => {
      const itemIndex = current.memberList.findIndex((item) => item.id === id);

      // If the item is not found, return the current state unmodified
      if (itemIndex === -1) {
        console.log("Item not found");
        return current;
      }

      // Create a new array excluding the item at itemIndex
      const updatedMemberList = [
        ...current.memberList.slice(0, itemIndex),
        ...current.memberList.slice(itemIndex + 1),
      ];

      // Return a new object with the updated itemList
      return { ...current, memberList: updatedMemberList };
    });
  }

  function handleLeave() {
    handleDeleteMember(loggedInUser.id);
  }

  function handleUpdateItem(id) {
    setCurrentList((current) => {
      const itemIndex = current.itemList.findIndex((item) => item.id === id);

      // If the item is not found, return the current state
      if (itemIndex === -1) {
        console.log("Item not found");
        return current;
      }

      // Determine the new status based on the current status
      const newStatus =
        current.itemList[itemIndex].status === "fulfilled"
          ? "unfulfilled"
          : "fulfilled";

      // Create a new item list with the updated item status
      const updatedItemList = current.itemList.map((item, index) =>
        index === itemIndex ? { ...item, status: newStatus } : item
      );

      console.log(
        newStatus === "fulfilled"
          ? "Changed to fulfilled"
          : "Changed to unfulfilled"
      );

      // Return new state
      return { ...current, itemList: updatedItemList };
    });
  }

  function handleAddItem(itemName) {
    setCurrentList((current) => ({
      ...current,
      itemList: [
        ...current.itemList,
        { id: Date.now().toString(), name: itemName, status: "unfulfilled" },
      ],
    }));
  }

  function handleAddMember(memberEmail) {
    if (!memberEmail.trim()) return; // Prevent adding empty or whitespace-only members

    setCurrentList((current) => {
      // Fetch the user details by email
      const user = getUserByEmail(memberEmail.trim());

      // Check if the user exists and is already in the member list
      const isMemberExisting = current.memberList.some(
        (member) => member.email === memberEmail.trim()
      );

      if (isMemberExisting) {
        console.log("Member already exists.");
        return current; // Return current list unchanged
      }

      if (!user) {
        console.log("User does not exist.");
        return current; // Return current list unchanged if user not found
      }

      // Add the new member to the memberList
      return {
        ...current,
        memberList: [...current.memberList, user],
      };
    });
  }

  function handleEdit(name) {
    setCurrentList((current) => ({
      ...current,
      name: name, // Update the name of the current list
    }));
  }

  function handleArchive(listId) {
    setShoppingLists((currentLists) =>
      currentLists.map((list) =>
        list.id === listId
          ? {
              ...list,
              state: list.state === "archived" ? "active" : "archived",
            }
          : list
      )
    );
  }

  function handleCreate(list) {
    console.log(list);
    setShoppingLists((prevLists) => [...prevLists, list]);
    console.log(shoppingLists);
  }

  function handleDeleteShoppingList(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this shopping list?"
    );

    if (confirmDelete) {
      setShoppingLists((currentLists) => {
        // Find the index of the shopping list to delete
        const listIndex = currentLists.findIndex((list) => list.id === id);

        // If the list is not found, return the current state unmodified
        if (listIndex === -1) {
          console.log("Shopping list not found");
          return currentLists;
        }

        // Create a new array excluding the list at listIndex
        const updatedShoppingLists = [
          ...currentLists.slice(0, listIndex),
          ...currentLists.slice(listIndex + 1),
        ];

        // Return the updated list
        return updatedShoppingLists;
      });
    }
  }

  const value = {
    handleLoadAll: handleLoadAll,
    handleLoad: handleLoad,
    handleDeleteItem: handleDeleteItem,
    setShowFulfilled: setShowFulfilled,
    handleUpdateItem: handleUpdateItem,
    handleDeleteMember: handleDeleteMember,
    handleAddItem: handleAddItem,
    handleLeave: handleLeave,
    handleAddMember: handleAddMember,
    handleDelete: handleDeleteShoppingList,
    handleEdit: handleEdit,
    handleArchive: handleArchive,
    isOwner: isOwner,
    handleCreate: handleCreate,
    setShowArchived: setShowArchived,
    setCurrentList: setCurrentList,
    showFulfilled: showFulfilled,
    currentList: currentList,
    shoppingLists: shoppingLists,
    showArchived: showArchived,
  };

  return (
    <>
      <ShoppingListContext.Provider value={value}>
        {children}
      </ShoppingListContext.Provider>
    </>
  );
}
