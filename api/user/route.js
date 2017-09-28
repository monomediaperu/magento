'use strict';

var routes = function (router) {
    const user = require('./controller');

    router.get('/user', user.listUsers);
    router.post('/user', user.createUser);
};

module.exports = routes;