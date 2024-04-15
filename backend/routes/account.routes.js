import { Router } from "express";
import Account from "../models/user/account.model.js";
import { authMiddleware } from "../middlewares/auth.js";

const router = Router();

// ✅
router.route("/balance").get(authMiddleware, async (req, res) => {
  // add middleware
  console.log(req.userId);
  const findBalance = await Account.findOne({ userId: req.userId });

  console.log(findBalance)
  return res.status(200).json({
    balance: findBalance.balance,
  });
});

router.route("/transfer").post(authMiddleware, async (req, res) => {
  try {
    const { to, amount } = req.body;
    console.log(to, amount, req.userId);


    // S1: find from current sending user
    // S2: check his balance amount is suffienct to send the required amount
    // S3: check if `to` user exists, if he exists then
    // S4: decrease balance from current user
    // S5: increase balance of `to` user

        // req.userId = "661d32451b6a7df609c6db81"
    console.log(req.userId)
    const fromAccount = await Account.findOne({ userId: req.userId });

    console.log(fromAccount, req.userId)
    if (!fromAccount || fromAccount.balance < amount) {
      return res
        .status(400)
        .json({ message: "Insufficient balance to transfer" });
    }

    const toAccount = await Account.findOne({ userId: to });

    if (!toAccount) {
      return res
        .status(400)
        .json({ message: "No such user found to transfer money" });
    }

    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    );

    await Account.updateOne({ userId: to }, { $inc: { balance: amount } });

    return res.status(200).json({
      message: "Transfer successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Other error",
    });
  }
});

export default router;
