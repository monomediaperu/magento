'use strict';

const mongoose = require('mongoose');
const UserModel = mongoose.model('Users');

var listUsers = function(req, res) {
    UserModel.find({}, function(err, user) {
        if (err) res.send(err);

        res.json(user);
    })
};

var createUser = function(req, res) {
    var newUser = new UserModel(req.body);

    newUser.save(
        function (err, user) {
            if (err) res.send(err);

            res.status(200).send();
        }
    );
};

module.exports = {
    listUsers: listUsers,
    createUser: createUser
};