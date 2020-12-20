import React from "react";
import UserCard from "../UserCard";
import { useSelector } from "react-redux";
import AddEditForm from "../AddEditModal";

const UsersList = () => {
  const loading = useSelector((state) => state.loading);
  const usersList = useSelector((state) => state.users);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <AddEditForm />
      <div className="users-container">
        {usersList.map((user, i) => (
          <UserCard user={user} key={i} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
