import { calculateAge, calculateAgePromise } from '../../app/calculateAge/calculateAge';

describe('Start test for calulateAge functions', () => {
  it('CalculateAge function will be tested', () => {
    const yearTest = 1987;
    const actual = calculateAge(yearTest);
    expect(actual).toBe(37);
  });
});

describe('Start test for calculateAgePromise', () => {
  const testInp = 1987;
  const expectAge = 39;

  afterEach(() => {
    jest.clearAllTimers();
    jest.restoreAllMocks();
  });

  //   first way: use spy to test, create a mock settimeout to replace the previous settimeout
  //   and track the implementation
  test('CalculateAgePromise will be tested - by mock and spy', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    const actual = calculateAgePromise(testInp);
    jest.advanceTimersByTime(2000);
    expect(setTimeout).toHaveBeenCalled();
    actual.then((age) => {
      expect(age).toEqual(expectAge);
    });
  });

  //   it('CalculateAgePromise will be tested - by stub', () => {
  // const stubSettimeout =
  //   })
});
