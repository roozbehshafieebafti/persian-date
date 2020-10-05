import { OutPut } from './out-put.interface';

export function dateSplicer(date: string): OutPut {
      let result: OutPut = {
            year: -1,
            month: -1,
            day: -1,
            hour: 0,
            minute: 0,
            second: 0,
            miliSecond: 0,
      };

      if (!date.match(/[0-9]+/g)) {
            return result;
      }

      // get data from input
      let [year, month, day, hour, minute, second, miliSecond] = date.match(/[0-9]+/g);
      /**
       * without hour, minute, second and  miliSecond you can calculate date
       * but without year, month and day it is NOT possible
       */
      result.year = isNaN(Number(year)) ? -1 : Number(year);
      result.month = isNaN(Number(month)) ? -1 : Number(month);
      result.day = isNaN(Number(day)) ? -1 : Number(day);
      result.hour = isNaN(Number(hour)) ? 0 : Number(hour);
      result.minute = isNaN(Number(minute)) ? 0 : Number(minute);
      result.second = isNaN(Number(second)) ? 0 : Number(second);
      result.miliSecond = isNaN(Number(miliSecond)) ? 0 : Number(miliSecond);

      return result;
}
