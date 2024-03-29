const UserController = require("../controllers/user.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = (app)=>{

    app.post("/api/user/register", UserController.register);
    app.post("/api/user/login", UserController.login);
    app.post("/api/user/logout", UserController.logout);
    app.get("/api/user/:email", UserController.findUserByEmail);
    app.get("/api/user/:id", UserController.findOneUser);
    app.get("/api/user", authenticate, UserController.getLoggedInUser);
    app.put("/api/user/:id", UserController.resetPassword);

}