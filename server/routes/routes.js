const mongoose = require("mongoose")
const Tasks = require("../controller.js");
const bp = require("body-parser");
var express = require('express');
const https = require('https');
const http = require('http');
var router = express.Router();
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bp.json())
    router.get('/', function(req, res){
        res.render('build/index')
    });

    app.get("/allImages", function(req,res){
        http.get('http://52.32.199.147:8000/media/getAllImages', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                console.log(JSON.parse(data));
            });
            res.send(JSON.parse(data));
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
        res.render('index');
    })
    app.get("/allVideos", function(req,res){
        http.get('http://52.32.199.147:8000/media/getAllVideos', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                console.log(JSON.parse(data));
            });
            res.send(JSON.parse(data));
            }).on("error", (err) => {
            console.log("Error: " + err.message);
            });
    })
}