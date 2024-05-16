import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";

const Users = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  },[]);
  return (
    <div>
      {users.user && users.user.map(item=><h2>{item.name}</h2>)}
    </div>
  );
};

export default Users;
