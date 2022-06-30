const userControl ={};

const userModel = require('../models/User');

userControl.getUser = async (req, res)=>{

    const users  = await userModel.find();
    res.json(users)
}

userControl.createUser = async (req, res)=>{

    const {username} = req.body;
    const newUser = new userModel({username})
    await newUser.save();
    res.json('User created')
}



userControl.deleteUser = async (req, res)=>{
   await userModel.findByIdAndDelete(req.params.id)
    res.json("User Delete")
}

module.exports = userControl;