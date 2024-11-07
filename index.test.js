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
        //one to many
        test("Band can have Many Musician",async function(){
            const testBand = await Band.create({ name:'Canadian-American',genre:'rock' });
            const testMusician1 = await Musician.create({ name:'Billie Eilish',instrument:'Violin' });
            const testMusician2 = await Musician.create({ name:'Mickel',instrument:'drum' });
    
            await testBand.addMusicians(testMusician1);
            await testBand.addMusicians(testMusician2);
            const associateMusician = await testBand.getMusicians();
            expect (associateMusician.length).toBe(2);
            expect (associateMusician instanceof Musician).toBeTruthy;
    
        })
        //many to many
        test("Band can have Many Song",async function(){
            const testBand = await Band.create({ name:'Canadian-American',genre:'rock' });
            const testSong1 = await Song.create({ title:'Moon',year:2020,length:9 });
            const testSong2 = await Song.create({ title:'Light',year:2022,length:7 });
    
            await testBand.addSongs(testSong1);
            await testBand.addSongs(testSong2);
            const associateSong = await testBand.getSongs();
            expect (associateSong.length).toBe(2);
            expect (associateSong instanceof Song).toBeTruthy;
    
        })
        test("Song can have Many Band",async function(){
            const testSong = await Song.create({ title:'Moon',year:2020,length:9 });
            const testBand1 = await Band.create({ name:'American',genre:'rock' });
            const testBand2 = await Band.create({ name:'American',genre:'Pop' });
    
            await testSong.addBands(testBand1);
            await testSong.addBands(testBand2);
            const associateBand = await testSong.getBands();
            expect (associateBand.length).toBe(2);
            expect (associateBand instanceof Band).toBeTruthy;
    
        })

})