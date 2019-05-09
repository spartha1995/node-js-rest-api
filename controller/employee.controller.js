"use strict";

var EmployeeRepository = require("../repository/employee.repository");

/**
 *
 * @param res Method to get all Employee
 */
exports.GetAllEmployee = function (res) {
    EmployeeRepository.GetAllEmployee().then(function (employee) {
        var employeeList = new Array();
        for (var i = 0; i < employee.length; i++) {
            employeeList.push(employee[i].dataValues);
        }
        res.send(employeeList);
    });
};

/**
 *
 * @param res Method to get employee by id
 * @param id
 */
exports.GetEmployeeById = function (res, id) {
    EmployeeRepository.GetEmployeeById(id).then(function (employee) {
        res.send(employee.dataValues);
    });
};

/**
 * Method to add employee
 * @param res
 * @param employee
 */
exports.AddEmployee = function (res, employee) {
    var employeeData = {
        firstname: employee.firstname,
        lastname: employee.lastname,
        email: employee.email
    };
    EmployeeRepository.AddEmployee(employeeData).then(function (employeeResponse) {
        res.send();
    });
};

/**
 *
 * @param res Method to Update Employee
 * @param employee
 */
exports.UpdateEmployee = function (res, employee) {
    var employeeData = {
        firstname: employee.firstname,
        lastname: employee.lastname,
        email: employee.email
    };
    EmployeeRepository.UpdateEmployee(employeeData, { id: employee.id }).then(function (employeeResponse) {
        res.send();
    });
};

/**
 * Method to delete Employee
 * @param res
 * @param id
 */
exports.RemoveEmployee = function (res, id) {
    EmployeeRepository.DeleteEmployee(id).then(function (employee) {
        res.send();
    });
};
