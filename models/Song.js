const {Sequelize, sequelize,DataTypes,Model} = require('../db');

// TODO - define the Band model

class Song extends Model {};

Song.init({
    title : DataTypes.STRING ,
    year: DataTypes.INTEGER,
    length : DataTypes.INTEGER,
},{
        sequelize : sequelize,
        modelName: "Song"
})

module.exports = {
    Song
};