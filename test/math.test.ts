import { substract, multiply, factorial } from '../src/math';
import * as chai from 'chai';

const expect = chai.expect;

describe('My math library', () => {

    it('should be able to substract things correctly', () => {
        expect(substract(20, 12)).to.equal(8);
    });

    it('should be able to multiply things correctly', () => {
        expect(multiply(5, 4)).to.equal(20);
    });

    it('should be able to calculate factorial correctly', () => {
        expect(factorial(4)).to.equal(24);
    });
    
});