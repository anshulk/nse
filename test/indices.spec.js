const nse = require('../index');
const expect = require('chai').expect;

describe('Indices', ()=>{
    it('Array', async ()=>{
        let i = await nse.indices();
        expect(i).to.be.an('array');
    });

    it('Array Length', async ()=>{
        let i = await nse.indices();
        expect(i).to.have.length.above(2);
    });
});
