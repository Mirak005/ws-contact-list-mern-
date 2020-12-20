import { GET_USERS, EDIT_USER, DELETE_USER, ADD_USER } from "../const";
import axios from "axios";

/**
 * GET    /api/users : get all users   =>  array of users

 GET    /api/users/:id : get user by id => user object

 POST   /api/add_user : ADD A NEW USER => user object
 
 PUT    /api/users/:id : EDIT A USER   => newUser object (option in findAndUpdate(id , modif , {new : true}))

 DELETE /api/users/:id : REMOVE A USER BY ID  => return the removed user
 */

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/add_user", formData);
    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
  } catch (error) {
    console.dir(error);
    alert(error.response.data.msg);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/${id}`);
    dispatch({
      type: DELETE_USER,
    });
    dispatch(getUsers());
  } catch (error) {
    console.log(error);
  }
};

export const editUser = (id, formData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/users/${id}`, formData);
    dispatch({
      type: EDIT_USER,
    });
    dispatch(getUsers());
  } catch (error) {
    alert("EDIT ERROR ");
  }
};
