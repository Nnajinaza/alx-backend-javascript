const assert = require('assert');
const {it, describe} = require('mocha');
const calNumber = require('./0-calcul');

describe('calNumber', () => {
	    it('checking if numbers round', () => {
		            assert.equal(calNumber(1, 3), 4);
		        });
	    it('checking if numbers round 2nd round', () => {
		            assert.equal(calNumber(1, 3.7), 5);
		        });
	    it('checking if numbers round 3nd round', () => {
		            assert.equal(calNumber(1.2, 3.7), 5);
		        });
	    it('checking if numbers round 4nd round', () => {
		            assert.equal(calNumber(1.5, 3.7), 6);
		        });
	    it('checking negative return', () => {
		            assert.equal(calNumber(-1.3, -3.7), -5);
		          });
});
