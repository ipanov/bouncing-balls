  
import { Utils } from '../src/Utils';

describe('utilities', function() {
  it('getRandomIntFromRange', function() {
    let result = Utils.getRandomIntFromRange(2, 5);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThanOrEqual(5);
  });

  it('getRandomColor', function() {
    let result = Utils.getRandomColor(['red','blue','green']);
    expect(result).toMatch(/red|blue|green/);
  });
});