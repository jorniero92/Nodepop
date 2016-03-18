"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {

    var sort = req.query.sort;
    User.list(sort, function(err, rows) {
        if (err) {
            res.json({ result: false, err: err });
            console.log('error en users.js');
            return;
        }

        //res.render('use_form', {users: rows});
        res.json({ result: true, users: rows });
        return
    });
});

router.post('/', function(req, res) {

    var user = new User(req.body);
    var queryUsuarios = User.find({ name: req.body.name }, function(err, rows) {
        if (err) {
            console.log("usuario ya adscrito: ", req.body.name);
            return;
        }

        if (rows.length === 0) {
            user.save(function(err, newRow) {
                if (err) {
                    res.json({ result: false, err: err });
                    return;
                }

                res.json({ result: true, row: newRow });
                return;
            });
        }

    });


});



module.exports = router;
