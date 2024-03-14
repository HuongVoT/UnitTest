import { calculateAge, calculateAgePromise } from '../../app/calculateAge/calculateAge';

describe('Start test for calulateAge functions', () => {
  it('CalculateAge function will be tested', () => {
    const yearTest = 1987;
    const actual = calculateAge(yearTest);
    expect(actual).toBe(37);
  });
  it('CalculateAgePromise will be tested', () => {
    const yearTest = 1987;
    const actual = calculateAgePromise(yearTest);
    expect(calculateAgePromise(yearTest)).resolves.toBe(37);
  });
});
