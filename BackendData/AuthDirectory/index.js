// Importing all required dependencies

const Express = require("express");
const Mongoose = require("mongoose");
const WebAuthToken = require("jsonwebtoken");
const CORS = require("cors");
const Parser = require("body-parser");
const BCrypt = require("bcrypt");
// Importing User-Auth_Schema
const User = require("./UserModels/UserAuth");

const SECURE_KEY = "secret__key";

const ExpApp = Express();

const DB_Connection_URI =
  "mongodb+srv://Avik100:User_Avik_100@cluster0.ezynsuk.mongodb.net/MongoData?retryWrites=true&w=majority&appName=Cluster0";

//   Connecting to the MongoDB server
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }  Deprecated values

Mongoose.connect(DB_Connection_URI)
  .then(() => {
    ExpApp.listen(4000, () => {
      console.log("Connected to MongoDB Database and port: 4000");
    });
  })
  .catch((err) => {
    console.log(err, "Not connected to MongoDB Database and port: 4000");
  });

//   Middleware

ExpApp.use(Parser.json());
ExpApp.use(CORS());

// Making the routes

// Registration
// POST Request Handler

ExpApp.post("/register", async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const HashedPassword = await BCrypt.hash(password, 12);
    const NewUserSchema = new User({
      email,
      userName,
      password: HashedPassword,
    });
    await NewUserSchema.save();
    res.status(200).json({ message: "user created successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// GET Request Handler

ExpApp.get("/register", async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json(Users);
  } catch (err) {
    res.status(500).json({ message: "users not fetched" });
  }
});

// Login
// Login POST Handler

ExpApp.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const LoginUser = await User.findOne({ userName });
    if (!LoginUser) {
      return res.status(400).json({ error: "Invalid Username" });
    }
    const Password = await BCrypt.compare(password, LoginUser.password);
    if (!Password) {
      return res.status(400).json({ error: "Invalid Password" });
    }
    const AuthToken = WebAuthToken.sign({ userID: LoginUser._id }, SECURE_KEY, {
      expiresIn: "1hr",
    });
    console.log(AuthToken)
    res.json({ message: "logged In" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
