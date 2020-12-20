import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./JS/actions";
import NavBar from "./components/Navbar";
import UsersList from "./components/UsersList";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <UsersList />
    </div>
  );
}
