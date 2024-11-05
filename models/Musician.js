const {Sequelize, sequelize,DataTypes,Model} = require('../db');

// TODO - define the Musician model

class Musician extends Model {};

Musician.init({
    name : DataTypes.STRING,
    instrument: DataTypes.STRING,
},{
        sequelize : sequelize,
        modelName: "Musician"
})

module.exports = {
    Musician
};