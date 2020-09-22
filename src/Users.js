import React from "react";
import { UsersContext } from "../src/Context/UserContext";

const Users = () => {
  const [users, setUsers] = React.useState([]);
  const { getUsers } = React.useContext(UsersContext);

  React.useEffect(() => {
    getUsers().then((result) => {
      setUsers(result);
    });
  }, [getUsers]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
