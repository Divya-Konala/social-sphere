const { error } = require("console");
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

//file-imports
const userRouter = require("./Routes/users");
const authRouter = require("./Routes/auth");
const isAuth = require("./Middleware/Auth");

const app = express();

//connecting mongodb session
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

//middlewares
app.use(express.json());
app.use(
  require("express-session")({
    secret: "This is a secret",
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

//routes
app.use("/api/users", isAuth, userRouter);
app.use("/api/auth", authRouter);
//initializations
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
  console.log(`server is running at ${PORT}`);
  //mongodb-connection
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected");
  } catch (error) {
    console.error(error.message);
  }
});
