import { DateTime } from 'luxon';

export const makeRandompastDate = () => {
  const value = new Date().valueOf();
  const n = 100000;

  return new Date(value - Math.floor(Math.random() * n * n));
};

export const makeRelativeDate = (date: Date) => {
  return DateTime.fromJSDate(date).startOf('day').toRelative();
};
export const randomRelativeDate = () => {
  return makeRelativeDate(makeRandompastDate());
};

export const makeDayMonthYear = (date: Date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
};
export const randomDayMonthYear = () => makeDayMonthYear(makeRandompastDate());
