"use strict";

var basicAuth = require('basic-auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var fn = function(user, pass) {
    return function(req, res, next) {
        var userRequest = basicAuth(req); //sacar del req el usuario
        var usuario = User.find({ nombre: userRequest.name });
        var contrasenya = User.find({ nombre: userRequest.pass });

        usuario.exec(){}
        if (!userRequest || userRequest.name == usuario || userRequest.pass == contrasenya) {
            //userRequest.name y userRequest.pass es lo que le pongo dede postman

            res.set('www-Authenticate', 'Basic realm=Authorization Required');
            res.send(401);

            return;
        }

        //si esta bien
        next();
    };
}

//var usuarioBD = function()
module.exports = fn;
