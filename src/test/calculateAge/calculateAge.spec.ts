import { calculateAge, calculateAgePromise } from '../../app/calculateAge/calculateAge';

describe('Start test for calulateAge functions', () => {
  it('CalculateAge function will be tested', () => {
    const yearTest = 1987;
    const actual = calculateAge(yearTest);
    expect(actual).toBe(37);
  });
});

describe('Start test for calculateAgePromise', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    jest.clearAllTimers();
  });
  it('CalculateAgePromise will be tested', () => {
    const testInp = 1987;
    const actual = calculateAgePromise(testInp);
    jest.advanceTimersByTime(2000);
    expect(setTimeout).toHaveBeenCalled();
    actual.then((age) => {
      expect(age).toEqual(37);
    });
  });
});
