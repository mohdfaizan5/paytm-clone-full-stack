import { Router } from "express";
import User from "../models/user/user.model.js";
import Account from "../models/user/account.model.js";
import { authMiddleware } from "../middlewares/auth.js";
import { createJWT } from "../utils/jwt.js";

const route = Router();

route.get("/", (req, res) => {
  res.send("working");
});

//✅
route.post("/signup", async (req, res) => {
  try {
    const { username, firstName, lastName, password } = req.body;

    if (!username || !password) {
      return res.status(411).json({ message: "All fields should be entered" });
    }

    const createdUser = await User.create({
      username,
      password,
      firstName,
      lastName,
    });

    const newAccount = await Account.create({
      userId: createdUser._id,
      balance: Math.floor(Math.random() * 10000),
      // some random value
    });

    const token = createJWT(
      { userId: createdUser._id },
      process.env.JWT_SECRET
    );

    console.log(token);
    if (createdUser) {
      return res.status(200).json({
        message: "User created successfully",
        token: token,
      });
    }
  } catch (error) {
    return res.status(410).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
});

//✅
route.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(411).json({ message: "All fields should be entered" });
    }

    console.log(username, password);
    const foundUser = await User.findOne({
      username,
    });

    if (foundUser.password != password) {
      return res.status(411).json({ message: "Invalid password" });
    }

    console.log(foundUser);

    const token = createJWT({ userId: foundUser._id });

    if (foundUser) {
      res.status(200).json({
        token: token,
      });
    } else {
      res.status(411).json({
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
});

// Implement this route
route.post("/", async (req, res) => {
  /**
   * 1. Route to update user information
   * User should be allowed to optionally send either or all of
      1. password
      2. firstName
      3. lastName
      Whatever they send, we need to update it in the database for the user.
      Use the middleware we defined in the last section to authenticate the user
      Method: PUT
      Route: /api/v1/user
      Body:
      Response:
      Status code - 200
      Status code - 411 (Password is too small…)
      Solution
      1. Route to update user information
      {
      password: "new_password",
      firstName: "updated_first_name",
      lastName: "updated_first_name",
      }
   * */
  const updatedDetails = true;
  if (updatedDetails) {
    return res.status(201).json({
      message: "Updated successfully",
    });
  }
  return res.status(401).json({ message: "Error while updating information" });
});

// ✅
route.get("/bulk", authMiddleware, async (req, res) => {
  // console.log(`user id ${req.userId}`);
  const { filter } = req.query;

  const foundResults = await User.find({ username: {"$regex": filter} });

  // User.find(/* This is needed so users can search for their friends and send them money */);
  console.log(foundResults)
  if (foundResults) {
    return res.status(200).json({ users: foundResults });
  }

  /*
    {
      users: [{
      firstName: "",
      lastName: "",
      _id: "id of the user"
      }]
    }
  */
});

export default route;
