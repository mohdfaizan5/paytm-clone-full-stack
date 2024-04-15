import { Router } from "express";
import Account from "../models/user/account.model.js";
import { authMiddleware } from "../middlewares/auth.js";
import mongoose from "mongoose";

const router = Router();

// ✅
router.route("/balance").get(authMiddleware, async (req, res) => {
  // add middleware
  console.log(req.userId);
  const findBalance = await Account.findOne({ userId: req.userId });

  return res.status(200).json({
    balance: findBalance.balance,
  });
});

router.route("/transfer").post(async (req, res) => {
  try {
    
    const session = await mongoose.startSession()
    const { to, amount } = req.body;
    console.log(to, amount)

    // decrease balance from current user
    // increase balance of `to` user
    
    await Account.update(
      { userId: req.userId },
      {
        $inc: {
          balance: -amount,
        },
      }
    );

    await Account.update(
      { to },
      {
        $inc: {
          balance: amount,
        },
      }
    );

    // {
    // message: "Insufficient balance"
    // }

    return res.status(200).json({
      message: "Transfer successful",
    });
  } catch (error) {
    return res.status(200).json({
      message: "Invalid account",
    });
  }
});

export default router;
