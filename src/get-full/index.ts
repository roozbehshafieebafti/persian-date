import { toJalali } from './to-jalali/to-jalali';
import { toGregorian } from './to-gregorian/to-gregorian';
import { getPersianMonthName } from '../get-full/month-name/get-persian-month-name';
import { getGregorianMonthName } from '../get-full/month-name/get-gregorian-month-name';

function getFull(date: string, type: 'fa' | 'en'): getFullOutPut {
      if (type === 'fa') {
            let { day, month, year, hour, minute, second, miliSecond } = toJalali(date);
            let monthName = getPersianMonthName(month);
            return {
                  year,
                  month,
                  day,
                  hour,
                  minute,
                  second,
                  millisecond: miliSecond,
                  monthName
            };
      } else if (type === 'en') {
            let { year, month, day, hour, minute, second, miliSecond } = toGregorian(date);
            let monthName = getGregorianMonthName(month);
            return {
                  year,
                  month,
                  day,
                  hour,
                  minute,
                  second,
                  millisecond: miliSecond,
                  monthName
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
                  monthName: ""
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
      monthName: string;
}

export default getFull;
