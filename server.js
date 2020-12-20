const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

//PARSE THE DATA TO JSON ( BODY-PARSER)
app.use(express.json());

//4-Create Your Schema
const User = require("./models/User");

//3-SETUP YOUR ENV VARIABLES
require("dotenv").config({ path: "./config/.env" });

//2- CONNECT THE DATABASE
connectDB();

/*************** CRUD *******************/

//GET ALL USERS
//PATH : /api/users
app.get("/api/users", (req, res) => {
  User.find().then((users) => res.send(users));
});

//ADD USER
//PATH : /api/add_user
app.post("/api/add_user", (req, res) => {
  const { name, lastName, email, phone } = req.body;
  User.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).send({ msg: "User Already Exists" });
    }
    new User({ name, lastName, email, phone })
      .save()
      .then((user) => res.send(user));
  });
});

//REMOVE USER BY ID
// PATH : /api/users/:id
app.delete("/api/users/:userID", (req, res) => {
  const _id = req.params.userID;
  User.findOneAndDelete({ _id }).then((removedUser) => {
    if (!removedUser) {
      return res.status(400).send({ msg: "There is no User with id : " + _id });
    }
    res.send({ removedUser, msg: "User Deleted With Success" });
  });
});

//EDIT USER BY ID
//PATH : /api/users/:id
app.put("/api/users/:userID", (req, res) => {
  const _id = req.params.userID;
  User.findByIdAndUpdate(_id, { ...req.body }, { new: true })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

/*************** END CRUD *******************/

//1- START THE SERVER
const port = 5000;
app.listen(port, () => {
  console.log("🖥️", ` :The Server is Running on http://localhost:${port}`);
});
