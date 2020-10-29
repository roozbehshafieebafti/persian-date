import { toJalali } from './to-jalali/to-jalali';
import { toGregorian } from './to-gregorian/to-gregorian';

function getFull(date: string, type: 'fa' | 'en'): getFullOutPut {
      if (type === 'fa') {
            let { day, month, year, hour, minute, second, miliSecond } = toJalali(date);
            return {
                  year,
                  month,
                  day,
                  hour,
                  minute,
                  second,
                  millisecond: miliSecond,
            };
      } else if (type === 'en') {
            let { year, month, day, hour, minute, second, miliSecond } = toGregorian(date);
            return {
                  year,
                  month,
                  day,
                  hour,
                  minute,
                  second,
                  millisecond: miliSecond,
            };
      } else {
            return {
                  year: 0,
                  month: 0,
                  day: 0,
                  hour: 0,
                  minute: 0,
                  second: 0,
                  millisecond: 0,
            };
      }
}

export interface getFullOutPut {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
      millisecond: number;
}

export default getFull;
