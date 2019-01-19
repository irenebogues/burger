// // Event handlers	
// $(function() {	
//     $(".burger-form").on("submit", function(event) {	
//         event.preventDefault();	


var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function(req, res) {
	res.redirect('/index');
});