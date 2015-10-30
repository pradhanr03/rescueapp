var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Rescue = require('../models/Rescue.js');

/* GET /rescue listing. */
router.get('/', function(req, res, next) {
    Rescue.find(function(err, rescues) {
        if (err) return next(err);
        res.json(rescues);
    });
});

/* POST /rescues */
router.post('/', function(req, res, next) {

    Rescue.create(req.body, function(err, post) {

        if (err) return next(err);
        res.json(post);
        console.log(post);
    });
});

/* GET /rescues/id */
router.get('/:id', function(req, res, next) {
    Rescue.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /rescues/:id */
router.put('/:id', function(req, res, next) {
    Rescue.findByIdAndUpdate(req.params.id, req.body, function(err, post) {

        if (err) return next(err);

        res.json(post);
    });
});

/* DELETE /rescues/:id */
router.delete('/:id', function(req, res, next) {
    Rescue.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
