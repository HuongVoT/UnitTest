export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringInfo: stringInfo) {
  return stringInfo.extraInfo != undefined
    ? Object.keys(stringInfo.extraInfo).length * stringInfo.length
    : 0;
}
