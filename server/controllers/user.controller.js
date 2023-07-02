const User= require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

    register: (req, res)=>{
        const user = new User(req.body)
        user.save()
            .then((newUser)=>{
                console.log(newUser);
                console.log("Successfully registered!")
                res.json({
                    successMessage: "Thank you for registering!",
                    user: newUser
                });
            })
            
                .catch((err)=>{
                    console.log("Failed registration!");
                    res.status(400).json(err);
                });
            },
            

    

    login: (req, res)=>{
        User.findOne({email: req.body.email})
        .then((userRecord)=>{
            if(userRecord === null){
                res.status(400).json({message: "Invalid login attempt!"})
            }
            else{
                bcrypt.compare(req.body.password, userRecord.password)
                .then((isPasswordValid)=>{
                    if(isPasswordValid){
                        console.log("Password valid");
                        res.cookie(
                            "usertoken",
                            jwt.sign(
                                {
                                    id: userRecord._id,
                                    email: userRecord.email,
                                    userName: userRecord.username
                                },
                                process.env.JWT_SECRET
                            ),
                            {
                            httpOnly: true,
                            expires: new Date(Date.now() + 9000000)
                            }
                        )
                        .json ({
                            message: "Successfully logged in!",
                            userLoggedIn: userRecord.username,
                            userID: userRecord._id
                        });
                    }
                    else{
                        res.status(400).json({message: "Invalid attempt"})
                    }
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json({message: "Invalid attempt"});
                })
            }
        })
        .catch((err)=>{
            console.log(err);
                    res.status(400).json({message: "Invalid attempt"});
        })
        
    },

    logout: (req, res)=>{
        console.log("Logging out");
        res.clearCookie("usertoken");
        res.json({
            message: "Successful logout!",
        });
    },

    getLoggedInUser: (req, res)=>{
        User.findOne({_id: req.jwtpayload.id})
        .then((user)=>{
            console.log(user);
            res.json(user);
        })
        .catch((err)=>{
            console.log(err);
        })
    },

    findUserByEmail: (req,res)=>{
        User.findOne({email: emailValue})
        .then((user)=>{
            console.log(user);
            res.json(user);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


}

