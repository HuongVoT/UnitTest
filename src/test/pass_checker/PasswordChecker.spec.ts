import {
  InvalidReasons,
  PasswordChecker,
} from '../../app/pass_checker/PasswordChecker';

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker;

  beforeEach(() => {
    sut = new PasswordChecker();
  });

  // interaction 1: length is not less than 8 characters
  it('Password with less than 8 characters is invalid', () => {
    const actual = sut.checkPassword('1234567');
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(InvalidReasons.SHORT);
  });

  // interaction 2: has at least 1 upper case letter
  it('Password has no upper case letter is invalid', () => {
    const actual = sut.checkPassword('123456abcd');
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(InvalidReasons.NONE_OF_UPPERCASE);
  });

  // interaction 3: has at least 1 lower case letter
  it('Password has no lower case letter is invalid', () => {
    const actual = sut.checkPassword('123456ABCD');
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(InvalidReasons.NONE_OF_LOWERCASE);
  });

  //interaction 4: has at least 1 number
  it('Password has no number letter is invalid!', () => {
    const actual = sut.checkPassword('abcksdfef');
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(InvalidReasons.NONE_OF_NUMBER);
  });
  //interaction 5: has at least 1 special character
  it('Password has no special letter is invalid!', () => {
    const actual = sut.checkPassword('1bcksdfef');
    expect(actual.valid).toBe(false);
    expect(actual.reason).toContain(InvalidReasons.NONE_OF_SPECIAL_CHARACTER);
  });
  it('Your password is ok!', () => {
    const actual = sut.checkPassword('123456abcD/');
    expect(actual.valid).toBe(true);
  });

  //
});
