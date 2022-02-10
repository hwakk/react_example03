import React from "react";

const UserDetail = ({ user }: any) => {
  return (
    <div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
      <div>{user?.phone}</div>
    </div>
  );
};

export default UserDetail;
