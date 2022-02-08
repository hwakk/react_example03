import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";

interface UserSet {
  id: number;
  name: string;
  username: string;
  email: string;
  address: any;
  phone: string;
  website: string;
  company: any;
}

const Users = () => {
  const [users, setUsers] = useState<UserSet[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      <UserList users={users} />
    </>
  );
};

export default Users;
