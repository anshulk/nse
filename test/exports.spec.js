const nse = require('../index');
const expect = require('chai').expect;

describe('Exports', () => {
    it('should export all functions', () => {
        expect(nse.price).to.be.a('function'),
        expect(nse.indices).to.be.a('function');
    });
});