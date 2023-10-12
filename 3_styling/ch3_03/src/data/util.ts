export const makeArray = (length: number) => new Array(length).fill(null);

export const range = (min: number, max: number): number[] => {
  return makeArray(max - min).map((_, index) => {
    return index + min;
  });
};

export const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};
