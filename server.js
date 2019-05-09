"use strict";

var express = require("express"),
    migrateDB = require("./Repository/data.repository"),
    EmployeeController = require("./controller/employee.controller"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express(),
    port = process.env.PORT || 8080,
    path = require('path');

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// for cross origin resource sharing, used when you are consuming APIs from cross domain
app.use(cors());

//create table
migrateDB.MigratedDatabase();
  
app.get("/", (req, res) => res.json({message: "Welcome to our EmployeeApp!"}));

app.get('/api/Fetchemployee', function (request, response) {
    EmployeeController.GetAllEmployee(response);
});

app.get('/api/employee/:id', function (request, response) {
    var id = +request.params.id;
    EmployeeController.GetEmployeeById(response, id);
});

app.post('/api/employee', function (request, response) {
    var body = request.body;
    var department = JSON.parse(JSON.stringify(body));
    EmployeeController.AddEmployee(response, department);
});

app.put('/api/employee', function (request, response) {
    var body = request.body;
    var department = JSON.parse(JSON.stringify(body));
    EmployeeController.UpdateEmployee(response, department);
});

app.get('/api/employee/:id/delete', function (request, response) {
    var id = +request.params.id;
    EmployeeController.RemoveEmployee(response, id);
});

app.listen(port);
