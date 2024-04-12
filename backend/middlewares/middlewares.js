export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    
    // sign jwt and if its successfull then take next
    const token = true // use 
  
    if(token){
      req.user = "user"
      next()
    }
  } catch (error) {
    res.status(403).json({
      message: "Unauthorized"
    })
    
  }

};
