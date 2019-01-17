var express = require("express");	
var router = express.Router();	
var burger = require("../models/burger")	
router.get("/", function(request, response){	
    burger.getAll(function(data) {	
        var allBurgers = {	
            burgers: data	
        };	
        response.render("index", allBurgers);	
    })
});

