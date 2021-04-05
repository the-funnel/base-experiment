import { add, substract, multiply } from '../src/math';
import * as chai from 'chai';

const expect = chai.expect;

describe('My math library', () => {

    it('should be able to add things correctly', () => {
        expect(add(5, 3, 1)).to.equal(9);
    });

    it('should be able to substract things correctly', () => {
        expect(substract(20, 12)).to.equal(8);
    });

    //todo: Fix this unit test.
    it('should be able to multiply things correctly', () => {
        expect(multiply(5, 4)).to.equal(20);
    });

});
