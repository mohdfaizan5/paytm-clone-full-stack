import { verifyJWT } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    // sign jwt and if its successfull then take next
    // console.log("auth token -->"+authorization);
    console.log(req.params)
    if (!authorization) {
      return res.status(401).json({
        message: "Unautherized",
      });
    }

    const token = verifyJWT(authorization);
    if (!token) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
    // console.log("return verify JWT-->" + token);

    if (token) {
      req.userId = token;
      next();
    }
  } catch (error) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
};
