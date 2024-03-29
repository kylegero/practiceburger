var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var theBurgers = {
            hamburgers: data
        };
        res.render("index", theBurgers);
    });
});

router.post("/insertOne", function (req, res) {
    burger.insertOne(req.body.burger_name, function (cheese) {
        res.redirect("/")
    });
});

router.post("/updateOne/:id", function (req, res) {
    var condition = "id= " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function () {
        res.redirect("/");
    });
    });

module.exports = router;