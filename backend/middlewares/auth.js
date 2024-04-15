import { verifyJWT } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    // sign jwt and if its successfull then take next
    // console.log("auth token -->"+authorization);
    console.log(req.params);
    if (!authorization) {
      return res.status(401).json({
        message: "Unautherized",
      });
    }

    const userId = verifyJWT(authorization);
    if (!userId) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    console.log("return verify JWT-->" + userId);
    req.userId = userId;
    next();
  } catch (error) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
};
