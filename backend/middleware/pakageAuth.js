exports.authenticatePakage = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "you are not authorised to access"
    });
}
    try {
        if(req.headers.authorization=='Bearer com.turnon.wall4d'){
            next();
        }
        else{
            return res.status(401).json({
                message: `you are not authorised to access`
              });
        }
      } catch (error) {
        console.log(error);
        res.status(401).json({
          message: "something went wrong"
        });
      }
}