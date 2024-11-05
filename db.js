//TODO - create the new sequelize connection
    const path = require("path");
    const { Sequelize, Model, DataTypes } = require("sequelize");

    const sequelize = new Sequelize({
        dialect:"sqlite",
        storage:path.join(__dirname,"sequelize.sqlite")
    })



module.exports = {
    sequelize,
    Sequelize,
    Model,
    DataTypes
};
