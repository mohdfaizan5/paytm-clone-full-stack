import jwt from "jsonwebtoken";

const createJWT = (input) => {
  try {
    const token = jwt.sign(input, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    return false;
  }
};

const verifyJWT = (token) => {
  try {
    let userId;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      // console.log(err);
      if (err) {
        return false;
      }
      // console.log(`token verified: ${decoded.userId}`);
      userId = decoded.userId;
      // return decoded.userId;
    });

    return userId
  } catch (error) {
    return false;
  }
};

export { createJWT, verifyJWT };
