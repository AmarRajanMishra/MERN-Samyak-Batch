const model  = require('../model/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Users = model.Users;



// Register
exports.registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        // 1. Existing User
        const existingUser = await Users.findOne({email : email});
        if(existingUser) {
            return res.status(400).json({message : "User already exists"})
        }

        // 2. Hashed Password // Encrypted Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Create User
        const user = await Users.create({
            email : email,
            name : name,
            password : hashedPassword
        })

        // 4. Token Generation
        const token = jwt.sign(
            {email : email, id : user._id},
            process.env.SECRET_KEY
            )
        res.status(201).json({user : user, token : token})
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                message : "Error while creating User",
            }
        )
    }
}


exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser = await Users.findOne({email : email})
        if(!existingUser){
            return res.status(404).json({message : "User not found"})
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res.status(404).json({message : "Email or Password invalid"})
        }
        const token = jwt.sign(
            {email : existingUser.email, id : existingUser._id},
            process.env.SECRET_KEY
            )
        res.status(201).json({user : existingUser, token : token})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Error while signin User"});
    }
}