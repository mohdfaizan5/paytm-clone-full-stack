import { Router } from "express";
import User from "../models/user/user.model.js";
import Account from "../models/user/account.model.js"
import { authMiddleware } from "../middlewares/middlewares.js";

const route = Router();

route.get("/", (req,res)=>{
  res.send("working")
})

route.post("/signup", async (req, res) => {
  try {
    const { username, firstName, lastName, password } = req.body;

    const createdUser = await User.create({
      username,
      password,
      firstName,
      lastName,
    });

    const newAccount = await Account.create({
      userId: createdUser._id,
      balance: Math.floor(Math.random() * 10000)
      // some random value 
    })

    if (createdUser) {
      res.status(200).json({
        message: "User created successfully",
        token: "jwt",
      });
    }
  } catch (error) {
    res.status(200).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
});

// Implement this route

route.get("/signin", async (req, res) => {
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

route.get("/bulk", authMiddleware, (req, res) => {
  const { filter } = req.params;

  const foundResults =
    User.find(/* This is needed so users can search for their friends and send them money */);

  if (foundResults) {
    return res.status(200).json({ users: [] });
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

route.get("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    const foundUser = await User.findOne({
      username: "mohdfaizan6",
      password: "12345",
    });

    if (foundUser) {
      res.status(200).json({
        token: "jwt",
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

export default route;
