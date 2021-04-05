import { substract, multiply, divide, factorial } from '../src/math';
import * as chai from 'chai';

const expect = chai.expect;

describe('My math library', () => {
    // todo: create unit test for add function
    it('should be able to substract things correctly', () => {
        expect(substract(20, 12)).to.equal(8);
    });

    it('should be able to multiply things correctly', () => {
        expect(multiply(5, 4)).to.equal(20);
    });

    it('should be able to calculate factorial correctly', () => {
        expect(factorial(4)).to.equal(24);
    });
    
    it('should be able to divide things correctly', () => {
        expect(divide(45, 9)).to.equal(5);
    });
});