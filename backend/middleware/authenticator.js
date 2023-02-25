const jwt = require('jsonwebtoken');


exports.authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;
  console.log('token', token);
  if (!token) {
    return res.status(401).json({
      message: "you are not  authorised to access Pratik"
    });
  }
  try {
    const decoded = jwt.verify(token, "hellonadeem");
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "something went wrong"
    });
  }

}

