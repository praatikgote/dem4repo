const User = require('../models/userModel');

exports.authentication = async (req, res) => {
  try {
    let {deviceId, androidVersion, deviceBrand, deviceToken} = req.body;
    if (!deviceId || !androidVersion || !deviceBrand || !deviceToken){
      throw new Error("Couldn't get all require fileds");
    }
    const userExist = await User.findOne({deviceId});
    if(userExist){
      userExist.deviceToken = deviceToken;
      const updatedDetails = await userExist.save();
      res.status(200).json({
        success: true,
        user: updatedDetails
      })
    }
    else{
    const newUser = new User({
      role: "user",
      deviceToken,
      coin: 123,
      deviceId,
      status: "FREE",
      androidVersion,
      deviceBrand,
      subscription: 'FREE',
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json({
      success: true,
      user
    });
  }
  } catch (err) {
    res.status(400).json({
      err: err.message
    }
      )
  }
}

exports.coin = async(req, res)=>{
  const {deviceId, coin} = req.body;
  try{
  if(!deviceId && !coin){
    throw Error("DeviceId and Coin are required");
  }
  else{
    const userExist = await User.findOne({deviceId});
    userExist.coin = coin;
    const user = await userExist.save();
    res.status(200).json({
      user
    })
  }}
  catch(err){
    res.status(500).json({
      err: err.message
    })
  }
}
// exports.login = async (req, res) => {
//     const { email, deviceId} = req.body
    
//     try {
//       if(!email && !deviceId){
//         return req.status(200).json({
//           message: "Email or device id is required"
//         })
//       }
//       if (email){
//         let user = await User.findOne({email})
//         return res.status(200).json({
//          user: user
//         });
//       }
      
//       if (deviceId){
//         let user = await User.findOne({deviceId})
//         return res.status(200).json({
//           user: user
//         })      
//       }
    
//     }
//     catch (error) {
//       res.status(400).json({
//         error: error.message
//       });    
//     }
// }


