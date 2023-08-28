const bcrypt = require("bcrypt");
require("dotenv").config();
const validator = require("validator");
const User = require("../Models/user");

const saltRounds = process.env.saltRounds;

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      if (existingUser.email === email)
        return res.status(400).json("email already registered. Please Login");
      else return res.status(400).json("username already exists");
    }
    //password encrytion
    const hashedPassword = await bcrypt.hash(password, parseInt(saltRounds));
    //creating new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    //saving in db and return res
    const dbUser = await newUser.save();
    res.status(201).json("new user created successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const Login = async (req, res) => {
  try {
    const { loginId, password } = req.body;
    //check if the loginId is email or username
    const isEmail = await validator.isEmail(loginId);
    //find the user in db
    let userDb;
    if (isEmail) {
      userDb = await User.findOne({ email: loginId });
    } else {
      userDb = await User.findOne({ username: loginId });
    }
    if (!userDb) {
      return res.status(404).json("user not found");
    }
    //validate for password match and return response
    const ismatch = await bcrypt.compare(password, userDb.password);
    if (!ismatch) return res.status(400).json("incorrect password");
    req.session.isAuth = true;
    req.session.user = {
      userId: userDb._id,
      username: userDb.username,
      email: userDb.email,
    };
    res.status(200).json("user login successful!");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { Register, Login };
