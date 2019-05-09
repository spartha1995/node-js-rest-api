"use strict";

var sql = require("../db"),
    Sequelize = require("sequelize");
    
var EmployeeAC = /** @class */ (function () {
    function EmployeeAC() {
    }
    return EmployeeAC;
}());

exports.EmployeeAC = EmployeeAC;

exports.Employee = sql.sequelize.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    }
});
