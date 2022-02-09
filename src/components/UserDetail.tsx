import React from "react";

const UserDetail = (props: any) => {
  return (
    <div>
      <div>{props.user?.name}</div>
      <div>{props.user?.email}</div>
      <div>{props.user?.phone}</div>
    </div>
  );
};

export default UserDetail;
