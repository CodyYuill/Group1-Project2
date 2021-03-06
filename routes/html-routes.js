const { requireAuth, checkUser } = require("../config/middleware/isAuthenticated.js");

module.exports = function (app) {

    app.get("*", checkUser);
    app.get("/", (req, res) => {
        res.render("homesearch");
    });


    app.get("/signup", (req, res) => {
        res.render("signup");
    });


    app.get("/login", (req, res) => {
        res.render("login");
    });

    

    app.get("/logout", (req, res) => {
        res.cookie("jwt", "", {maxAge: 1});
        res.redirect("/");
    });
};
