import {createContext,  useEffect,  useState } from "react";

export const UserContext = createContext();

const userList = [
  {
    id: "u1",
    email: "u1@test.com",
  },
  {
    id: "u2",
    email: "u2@test.com",
  },
  {
    id: "u3",
    email: "u3@test.com",
  },
  {
    id: "u4",
    email: "u4@test.com",
  },
];

export default function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({
    id: "u2",
    email: "u2@test.com",
  });

  function getUserByEmail(email) {
    return userList.find((member) => member.email === email);
}


  const value = {
    userList: userList,
    loggedInUser: loggedInUser,
    setLoggedInUser: setLoggedInUser,
    getUserByEmail: getUserByEmail
  };

  return (
    <>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </>
  );
}
