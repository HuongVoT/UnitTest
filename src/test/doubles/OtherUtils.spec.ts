import { stringInfo } from '../../app/Utils';
import { calculateComplexity } from '../../app/doubles/OtherUtils';

describe('OtherUtile test suite', () => {
  it('Calculate complexity', () => {
    // testInfo is a stub: an incompleted input just used to test
    const testInfo = {
      length: 5,
      extraInfo: {
        f1: 'some infor',
        f2: 2,
      },
    };
    // test for git push command
    const actual = calculateComplexity(testInfo as any);
    expect(actual).toBe(10);
  });
  it('Calculate complexity if input undefined', () => {
    const testInfo = {
      length: 4,
      extraInfo: undefined,
    };
    const actual = calculateComplexity(testInfo as any);
    expect(actual).toBe(0);
  });
});
