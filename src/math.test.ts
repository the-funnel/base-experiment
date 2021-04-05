import { add } from './math';
import * as chai from 'chai';

const expect = chai.expect;
describe('My math library', () => {

    it('should be able to add things correctly', () => {
        expect(add(5, 3, 1)).to.equal(9);
    });

});
