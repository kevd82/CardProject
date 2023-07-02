const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true],
        required: [true, "User name is required!"],
        minLength: [2, "User name must contain at least 2 characters!"],
        maxLength: [30, "User name must not contain more than 30 characters!"],
    },

    email: {
        type: String,
        required: [true, "Email address is required!"],
        unique: [true],
    },

    securityQuestionOne: {
        type: String,
        required: [true, "Security question one is required!"],
    },

    securityQuestionTwo: {
        type: String,
        required: [true, "Security question two is required!"],
    },

    password: {
        type: String,
        required: [true, "Password is required!"],
        minLength: [8, "Password must contain at least 8 characters!"]
    },



}, {timestamps:true})


UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword = value)

UserSchema.pre("validate", function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Passwords must match!")
        console.log("Passwords do not match!")
    }
    next()
})

UserSchema.pre("save", function(next){
    console.log("Pre save");
    bcrypt.hash(this.password, 10)
        .then((hashedPassword)=>{
            this.password = hashedPassword;
            next();
        })
})

UserSchema.plugin(uniqueValidator);
const User = mongoose.model("User", UserSchema);




module.exports = User;