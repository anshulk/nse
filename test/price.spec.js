const nse = require('../index');
const expect = require('chai').expect;

describe('Price', ()=>{
    it('RELIANCE', async ()=>{
        let p = await nse.price('RELIANCE');
        expect(p).to.be.an('object');
        let lp = await nse.lastPrice('RELIANCE');
        expect(parseFloat(lp)).to.be.a('number');
        console.log(lp);
    });
});