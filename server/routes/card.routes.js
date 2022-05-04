const cardController = require("../controllers/card.controller");
const {authenticate} = require("../config/jwt.config");


module.exports = (app)=>{

    app.get("/api/card", cardController.findAllCards);
    app.post("/api/card", authenticate, cardController.createNewCard);
    app.get("/api/card/:id", cardController.findOneCard);
    app.get("/api/cardsbyuser/:username", authenticate, cardController.findAllCardsByUser);
    app.delete("/api/card/:id", cardController.deleteOneCard);
    app.put("/api/card/:id", cardController.updateCard);


}