"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) { return res.send('Eu sou Full Cycle.'); });
// Executa o servidor na porta 3000
app.listen(8080, function () { return console.log('Running on port 8080'); });
