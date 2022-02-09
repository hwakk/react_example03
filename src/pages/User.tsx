import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserDetail from "../components/UserDetail";

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

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserSet>();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  return (
    <>
      <h1>User</h1>
      <UserDetail user={user} />
    </>
  );
};

export default User;
