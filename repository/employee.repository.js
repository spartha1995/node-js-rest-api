"use strict";

var employee_model = require("../model/employee.model"),
    DataRepository = require("./data.repository");

/**
 * Method to Get all Employee
 */
exports.GetAllEmployee = function () {
    return DataRepository.GetAll(employee_model.Employee);
};

/**
 *
 * @param id Method to Get Employee by id
 */
exports.GetEmployeeById = function (id) {
    return DataRepository.GetById(employee_model.Employee, id);
};

/**
 *
 * @param data Method to Add Employee
 */
exports.AddEmployee = function (data) {
    return DataRepository.AddData(employee_model.Employee, data);
};

/**
 *
 * @param data Method to update Employee
 * @param query
 */
exports.UpdateEmployee = function (data, query) {
    return DataRepository.UpdateData(employee_model.Employee, data, query);
};

/**
 *
 * @param id Method to delete Employee
 */
exports.DeleteEmployee = function (id) {
    return DataRepository.RemoveData(employee_model.Employee, { id: id });
};
