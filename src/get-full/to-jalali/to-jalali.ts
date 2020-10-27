import { dateSplicer } from '../date-splicer/date-splicer';
import { inWinter } from './in-winter';
import { howManyDaysArePast } from './how-many-days-are-past';
import { springCalculation } from './spring-calculation';
import { winterCalculation } from './winter-calculation';

export function toJalali(date: string): outPut {
      let { year, month, day, hour, minute, second, miliSecond } = dateSplicer(date);
      let Days = howManyDaysArePast(year, month, day);
      if (inWinter(Days)) {
            return {
                  ...winterCalculation(year, Days),
                  hour,
                  minute,
                  second,
                  miliSecond
            }
      } else {
            return {
                  ...springCalculation(year, Days),
                  hour,
                  minute,
                  second,
                  miliSecond
            };
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
}
