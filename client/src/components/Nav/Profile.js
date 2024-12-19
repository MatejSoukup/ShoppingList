import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";

export function Profile(){
    const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  return (
    <div style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      AppName{" "}
      {userList.map((user) => (
        <button key={user.id} onClick={() => setLoggedInUser(user)}>
          {user.email} {(user.id === loggedInUser.id).toString()}
        </button>
      ))}
    </div>
    );
}