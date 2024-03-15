import { StringUtils, getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suite', () => {
  describe('StringUtils tests', () => {
    let sut: StringUtils;
    beforeEach(() => {
      sut = new StringUtils();
    });
    it('Should return correct upperCase', () => {
      const actual = sut.toUppeCase('abc');
      expect(actual).toBe('ABC');
    });
    it('Should throw error on invalid argument - function', () => {
      function expectError() {
        const actual = sut.toUppeCase('');
      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError('Invalid argument!');
    });
    it('Should throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUppeCase('');
      }).toThrowError('Invalid argument!');
    });
    it('Should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUppeCase('');
        done('GetStringInfo should throw error for invalid argument!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }
    });
  });
  it('should return uppercase of valid string', () => {
    //arange:
    const sut = toUpperCase; /* sut: system under test */
    const expected = 'MY-STRING';

    //act:
    const actual = sut('my-string');

    //assert:
    expect(actual).toBe(expected);
  });

  describe('ToUPperCase examples', () => {
    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'My-string', expected: 'MY-STRING' },
      { input: 'def', expected: 'DEF' },
    ])('$input toUpperCase should be $expected', ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe('getStringInfo for arg My-string should', () => {
    test('return right length', () => {
      const actual = getStringInfo('My-string');
      expect(actual.characters).toHaveLength(9);
    });
    test('return right lower case', () => {
      const actual = getStringInfo('My-string');
      expect(actual.lowerCase).toBe('my-string');
    });
    test('return right upper case', () => {
      const actual = getStringInfo('My-string');
      expect(actual.upperCase).toBe('MY-STRING');
    });
    test('return right characters', () => {
      const actual = getStringInfo('My-string');
      expect(actual.characters).toEqual(['M', 'y', '-', 's', 't', 'r', 'i', 'n', 'g']);
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['M', 'y', '-', 's', 't', 'r', 'i', 'n', 'g']),
      );
    });

    test('return defined extra info', () => {
      const actual = getStringInfo('My-string');
      expect(actual.extraInfo).toBeDefined();
    });
    test('return right extra info', () => {
      const actual = getStringInfo('My-string');
      expect(actual.extraInfo).toEqual({});
    });
  });
});
