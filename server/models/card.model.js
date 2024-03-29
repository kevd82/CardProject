const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        
        minLength: [2, "Name must contain at least 2 characters!"],
        maxLength: [20, "Name must not contain more than 20 characters!"],
        required: [true, "Name is required!"],
    },

    image: {
        type: String,
        required: [true, "Image is required!"],
    },

    prowess: {
        type: String,
        required: [true, "Prowess stat is required!"],
    },

    wits: {
        type: String,
        required: [true, "Wits stat is required!"],
    },

    vitality: {
        type: String,
        required: [true, "Vitality stat is required!"]
    },

    abilityOne: {
        type: String,
    },

    abilityTwo: {
        type: String,
    },

    abilityThree: {
        type: String,
    },

    abilityFour: {
        type: String,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },



}, {timestamps:true})

const Card = mongoose.model("Card", CardSchema)

module.exports=Card;
