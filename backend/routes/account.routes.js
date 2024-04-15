import { Router } from "express";
import Account from "../models/user/account.model.js";

const router = Router();

router.route("/balance").get(async (req, res) => {
  // add middleware
  const findBalance = await Account.findOne({ userId: req.user });

  return res.status(200).json({
    balance: 100,
  });
});

router.route("/account/transfer").get(async (req, res) => {
  const { to, amount } = req.body;
  // {
  //   to: string,
  //   amount: number
  //   }

  // decrease balance from current user
  // increase balance of `to` user

  try {
    await Account.update(
      { username },
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
