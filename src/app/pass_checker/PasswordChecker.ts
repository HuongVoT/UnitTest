export enum InvalidReasons {
  SHORT = 'Your password length is required not less than 8 characters',
  NONE_OF_UPPERCASE = 'Upper case letter is required!',
  NONE_OF_LOWERCASE = 'Lower case letter is required!',
  VALID = '',
}

export interface CheckerResult {
  valid: boolean;
  reason: InvalidReasons[];
}

export class PasswordChecker {
  public checkPassword(password: string): CheckerResult {
    const reasons: InvalidReasons[] = [];
    //length greater than or equal to 8
    if (password.length < 8) {
      reasons.push(InvalidReasons.SHORT);
    }
    // has at least 1 upper case letter
    if (password == password.toLowerCase()) {
      reasons.push(InvalidReasons.NONE_OF_UPPERCASE);
    }
    //has at lease 1 lower case letter
    if (password == password.toUpperCase()) {
      reasons.push(InvalidReasons.NONE_OF_LOWERCASE);
    }
    return {
      valid: reasons.length == 0 ? true : false,
      reason: reasons,
    };
  }
}
