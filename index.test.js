const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({ name:'Canadian-American',genre:'rock' });
        expect(testBand.name).toBe('Canadian-American');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({ name:'Billie Eilish',instrument:'Violin' });
        expect(testMusician.name).toBe('Billie Eilish');
    })

    test('can update a Band', async () => {
        
        const bandId = 1; 
        await Band.update({ genre: 'rock' }, { where: { id: bandId } });
        const updatedBand = await Band.findOne({ where: { id: bandId } });
        expect(updatedBand.genre).toBe('rock');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const MusicianId = 1; 
        await Musician.update({ name: 'Mickel' }, { where: { id: MusicianId } });
        const updatedMusician = await Musician.findOne({ where: { id: MusicianId } });
        expect(updatedMusician.name).toBe('Mickel');
    })

    test('can delete a Band', async () => {
        const BandId = 1; 
        // Delete the Band
        await Band.destroy({ where: { id: BandId } });
        // Try to find the deleted band
        const deletedBand = await Band.findOne({ where: { id: BandId } });
        // Expect the deletedBand to be null
        expect(deletedBand).toBeNull();
    });

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const MusicianId = 1;
        await Musician.destroy({ where: { id: MusicianId } })
        const deletedMusician = await Musician.findOne({ where: { id: MusicianId } })
        expect(deletedMusician).toBeNull();

    })
})