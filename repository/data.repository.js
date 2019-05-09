"use strict";

var Employee = require("../model/employee.model");

/**
 * Method to migrate database
 */
exports.MigratedDatabase = function () {
    Employee.Employee.sync();
};

/**
 * Method to get all model data
 * @param model
 */
exports.GetAll = function (model) {
    return model.findAll();
};

/**
 * Method to get Model data by Id
 * @param model
 * @param id
 */
exports.GetById = function (model, id) {
    return model.findByPk(id);
};

/**
 * Method to add data into model
 * @param model
 * @param data
 */
exports.AddData = function (model, data) {
    return model.create(data);
};

/**
 * Method to update model data
 * @param model
 * @param data
 * @param query
 */
exports.UpdateData = function (model, data, query) {
    debugger;
    // return model.update(data, {
    //     where: query
    // });
    return model.update({firstname:model.firstname,lastname:model.lastname,email:model.email},
        {where: {id: model.id}});
};

/**
 * Method to remove model data
 * @param model
 * @param query
 */
exports.RemoveData = function (model, query) {
    return model.destroy({
        where: query
    });
};
