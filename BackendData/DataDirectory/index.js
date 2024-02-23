const express = require("express");
const mongoose = require("mongoose");
const CORS = require("cors");
const TabDataSchemaModel = require("./DataSchema/Schema");

const PORT = process.env.PORT || 8008;

const App = express();

const URI =
  "mongodb+srv://Avik100:User_Avik_100@cluster0.ezynsuk.mongodb.net/TableData?retryWrites=true&w=majority&appName=Cluster0";

App.use(CORS());
App.use(express.json());

mongoose
  .connect(URI)
  .then(() => {
    App.listen(PORT, () => {
      console.log(
        "the Port is running on : http://localhost:8008 and Connected to MongoDB"
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });

//   GET Users Data

App.get("/GET", async (req, res) => {
  try {
    const UsersDataBase = await TabDataSchemaModel.find();
    res.status(200).json({
      success: 200,
      message: "Server is running",
      data: UsersDataBase,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// POST Users Data

App.post("/POST", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, mobile } = req.body;
    const NewData = new TabDataSchemaModel({ name, email, mobile });
    await NewData.save();
    res.status(200).json({
      success: 200,
      message: "user data successfully created",
      data: NewData,
    });
  } catch (error) {
    res.status(500).json({ message: `user data creation fail ${error}` });
  }
});

// UPDATE Users Data

App.put("/PUT", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;
    const UpdateUser = TabDataSchemaModel.updateOne({ _id: _id }, rest);
    await UpdateUser;
    res.send({
      success: 200,
      message: "successfully updated",
    });
  } catch (error) {
    res.status(500).json({ message: `user data update fail ${error}` });
  }
});

// DELETE Users Data

App.delete("/DELETE/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const DeleteUserData = TabDataSchemaModel.deleteOne({ _id: id });
    await DeleteUserData;
    res
      .status(200)
      .json({ success: 200, message: "user data deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: `user data delete fail ${err}` });
  }
});
