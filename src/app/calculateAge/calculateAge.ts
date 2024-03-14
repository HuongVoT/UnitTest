export let calculateAge = (year: number): number => {
  return 2024 - year;
};

export async function calculateAgePromise(year: number) {
  const y = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(2024 - year);
    }, 2000),
  );
  return y;
}
