const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3005;
const router = express.Router();

const UserModel = require('./api/user/model');
const UserRoutes = require('./api/user/route');

UserRoutes(router);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/monomediaDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

app.get('/fonts/:fileName', function (req, res) {
    res.sendFile(req.params.fileName, {root: __dirname + '/public/fonts/'});
});

app.get('/images/:fileName', function (req, res) {
    res.sendFile(req.params.fileName, {root: __dirname + '/public/images/'});
});

app.get('/scripts/:fileName', function (req, res) {
    res.sendFile(req.params.fileName, {root: __dirname + '/public/scripts/'});
});

app.get('/styles/:fileName', function (req, res) {
    res.sendFile(req.params.fileName, {root: __dirname + '/public/styles/'});
});

app.get('*', function(req, res) {
    res.sendFile('index.html', {root : __dirname + '/public/'});
});

app.listen(port);
console.log('running at post: ' + port);