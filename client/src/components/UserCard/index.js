import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import AddEditModal from "../AddEditModal";
import { deleteUser } from "../../JS/actions";
import "./UserCard.css";
import AddEditForm from "../AddEditModal";

const UserCard = ({ user: { name, lastName, email, phone, _id } }) => {
  const dispatch = useDispatch();
  const removeUser = (id) => dispatch(deleteUser(id));
  const [show, setShow] = useState(false);
  const color = useRef(randomColor());

  return (
    <div className="user-card" onMouseLeave={() => setShow(false)}>
      <i
        className={`fas fa-ellipsis-v ${show && "action-btn"} `}
        onClick={() => setShow(!show)}
      />
      {show && (
        <ul className="action-menu">
          <li>
            <i className="fas fa-trash" />{" "}
            <span onClick={() => removeUser(_id)}>DELETE</span>
          </li>
          <li>
            <i className="fas fa-pen" />
            <AddEditForm
              userId={_id}
              oldUser={{ name, lastName, email, phone }}
            />
          </li>
        </ul>
      )}

      <div className="avatar" style={{ background: color.current }}>
        {name[0]}
      </div>
      <div className="user-info">
        <p>
          <i className="fas fa-user" />
          <span> {`${name} ${lastName}`} </span>
        </p>

        <p>
          <i className="fas fa-envelope" />
          <span> {email} </span>
        </p>
        <p>
          <i className="fas fa-phone" />
          <span> {phone} </span>
        </p>
      </div>
    </div>
  );
};
export default UserCard;

function randomColor() {
  return `rgb(${Math.round(Math.random() * 255)} , ${Math.round(
    Math.random() * 255
  )} , ${Math.round(Math.random() * 255)})`;
}
