import { expect } from 'chai';

import { shuffle } from '../src/shuffle.js';

describe('shuffle function', () => {
  it('should return a new array with the same elements', () => {
    const original = [1, 2, 3, 4, 5];
    const result = shuffle([...original]);

   
    expect(result).to.have.members(original);

   
    const sameOrder = result.every((val, i) => val === original[i]);
    expect(sameOrder).to.be.false;
  });

  it('should not modify the original array', () => {
    const original = [1, 2, 3];
    const copy = [...original];
    shuffle(original);
    expect(original).to.deep.equal(copy);
  });
});
