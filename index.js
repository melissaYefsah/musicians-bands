const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

//Multiple musicians can be added to a band
//Every musician has only one band
Band.hasMany(Musician);
Musician.belongsTo(Band);

//Multiple songs can be added to a Band.
//Multiple bands can have the same Song.

Band.hasMany(Song);
Song.hasMany(Band);






module.exports = {
    Band,
    Musician,
    Song
};
