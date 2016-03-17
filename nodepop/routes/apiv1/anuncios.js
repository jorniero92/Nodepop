"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Anuncios = mongoose.model('Anuncios');

/* GET anuncios listing. */
router.get('/', function(req, res, next) {

	var sort = req.query.sort;
	Anuncios.list(sort, function(err, rows){
	if(err){
		res.json({result: false, err: err});
		console.log('error en anuncios.js');
		return;
	}

	//res.render('use_form', {anuncios: rows});
	res.json({result: true, anuncios: rows});
	return	
	});
});

router.post('/', function(req,res){
	
	var anuncios = new Anuncios(req.body); 
	var queryAuncios = Anuncios.find({nombre: req.body.name}, function(err, rows){
		console.log(rows.length);
		if(err){
			console.log("Anuncio ya adscrito con igual nombre: ", req.body.name);
			return;
		}

		if(rows.length === 0 ){
			anuncios.save(function(err, newRow){
				if(err){
					res.json({result: false, err: err});

					return;
				}		

				res.json({result: true, row: newRow});
				return;
			});
		}
	
			
	});

	console.log("no se ha guardado el anuncio");
	return;

	
});



module.exports = router;