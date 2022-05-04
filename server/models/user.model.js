const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "User name is required!"],
        minlength: [2, "User name must contain at least 2 characters!"],
        maxlength: [30, "User name must not contain more than 30 characters!"],
    },

    email: {
        type: String,
        required: [true, "Email address is required!"],
    },

    password: {
        type: String,
        required: [true, "Password is required!"],
        minlength: [8, "Password must contain at least 8 characters!"]
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

const User = mongoose.model("User", UserSchema);

module.exports = User;