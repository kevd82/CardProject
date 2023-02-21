const Card = require("../models/card.model");
const jwt = require("jsonwebtoken");

module.exports = {

    findAllCards: (req, res) =>{
        Card.find()
        .populate("createdBy", "username email")
        .then((allCards)=>{
            console.log(allCards);
            res.json(allCards)
        })
        .catch((err)=>{
            console.log("Error with findAllCards");
            res.json({message: "Error with findAllCards", error: err})
        })
    },


    createNewCard: (req ,res) =>{

        const newCardObject = new Card(req.body);

        const decodedJWT = jwt.decode(req.cookies.usertoken,{
            complete: true
        })

        newCardObject.createdBy = decodedJWT.payload.id;

        newCardObject.save()

        .then((newCard)=>{
            console.log(newCard);
            res.json(newCard);
        })
        .catch((err)=>{
            console.log("Error with createNewCard");
            res.status(400).json(err)
        })
    },


    findOneCard: (req, res)=>{
        Card.findOne({_id: req.params.id})
        .then((oneCard)=>{
            console.log(oneCard);
            res.json(oneCard);
        })
        .catch((err)=>{
            console.log("Error with findOneCard");
            res.json({message: "Error with findOneCard", error: err})
        })
    },


    deleteOneCard: (req, res)=>{
        Card.deleteOne({_id: req.params.id})
        .then((deletedCard)=>{
            console.log(deletedCard);
            res.json(deletedCard);
        })
        .catch((err)=>{
            console.log("Error with deleteOneCard");
            res.json({message: "Error with deleteOneCard", error: err})
        })
    },


    updateCard: (req, res)=>{
        Card.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true})
            .then((updatedCard)=>{
                console.log(updatedCard);
                res.json(updatedCard);
            })
            .catch((err)=>{
                console.log("Error with updateCard");
                res.status(400).json(err);
            })
    },


    findAllCardsByUser: (req, res)=>{
        if(req.jwtpayload.username !== req.params.username){
            console.log("Not the user");

            User.findOne({username: req.params.username})
            .then((userNotLoggedIn)=>{
                Card.find({createdBy: userNotLoggedIn._id})
                .populate("createdBy", "username")
                .then((allCardsByUser)=>{
                    console.log(allCardsByUser);
                    res.json(allCardsByUser);
                })

            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
        }
        else{
            console.log("Current user");
            console.log("req.jwtpayload.id", req.jwtpayload.id);
            Card.find({createdBy: req.jwtpayload.id})
                populate("createdBy", "username")
                .then((allCardsByLoggedInUser)=>{
                    console.log(allCardsByLoggedInUser);
                    res.json(allCardsByLoggedInUser);
                })
                .catch((err)=> {
                    console.log(err);
                    res.status(400).json(err);
                })
        }
    }



}