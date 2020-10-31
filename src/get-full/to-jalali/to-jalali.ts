import { dateSplicer } from '../date-splicer/date-splicer';
import { inWinter } from './in-winter';
import { howManyDaysArePast } from './how-many-days-are-past';
import { springCalculation } from './spring-calculation';
import { winterCalculation } from './winter-calculation';
import { jalaliValidation } from '../validation/jalali-validation';
import { getNumeric } from '../getNumeric';

export function toJalali(date: string): outPut {
      let { year, month, day, hour, minute, second, miliSecond } = dateSplicer(date);

      let { staus, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MILISECOND } = jalaliValidation(
            year,
            month,
            day,
            hour,
            minute,
            second,
            miliSecond,
      );

      if (!staus) {
            return {
                  year: 0,
                  month: 0,
                  day: 0,
                  hour: 0,
                  minute: 0,
                  second: 0,
                  miliSecond: 0,
                  numeric: 0
            };
      } else {
            let Days = howManyDaysArePast(YEAR, MONTH, DAY);
            let NUMERIC = getNumeric(YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MILISECOND);
            if (inWinter(Days)) {
                  return {
                        ...winterCalculation(YEAR, Days),
                        hour: HOUR,
                        minute: MINUTE,
                        second: SECOND,
                        miliSecond: MILISECOND,
                        numeric: NUMERIC
                  };
            } else {
                  return {
                        ...springCalculation(YEAR, Days),
                        hour: HOUR,
                        minute: MINUTE,
                        second: SECOND,
                        miliSecond: MILISECOND,
                        numeric: NUMERIC
                  };
            }
      }
}

interface outPut {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
      miliSecond: number;
      numeric: number;
}
