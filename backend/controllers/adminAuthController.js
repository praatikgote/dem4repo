const Admin = require('../models/adminModel')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
exports.register = async (req, res) =>{
    let {email, password} = req.body;
    const user = await Admin.findOne({  email });
    if (user) {
        throw Error("Email or password is invalid")
    }
    else{
        const newUser =  new Admin();
        newUser.role = "admin";
        newUser.email = email
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        const user = await newUser.save();
        res.status(200).json({
            user: user
        })
    }
}

exports.login = async (req, res) =>{
    let {email, password} = req.body;
    const user = await Admin.findOne({email}).select("+password");
    console.log(user)
    if(user){
        const passwordMatchStatus = await bcrypt.compare(password, user.password);
        if(passwordMatchStatus){
            const token = jwt.sign({_id:user._id}, "abrakadabra", { expiresIn: "1d" })
            res.cookie("token", token,{
                expire: new Date(Date.now + 864000000),
                httpOnly: true
            });
            res.status(201).send({message: "Login Successfully", userData: user});
        }
        else{
            throw Error("Email or password is incorrect!")
        }
    }
    else{
        res.status(404).send("User not found");
    }
}