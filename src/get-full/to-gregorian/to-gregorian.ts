import { dateSplicer } from '../date-splicer/date-splicer';
import { isLeap } from '../leap/is-leap';
import { calculateMonthAndDayInLeapYear } from './calculate-month-and-day-in-leap-year';
import { calculateMonthAndDayInOrdinaryYear } from './calculate-month-and-day-in-ordinary-year';
import { calculateYear } from './calculate-year';
import { howManyDaysArePast } from './how-many-days-are-past';
import { howManyDaysArePastFromGregorian } from './how-many-days-are-past-from-gregorian';
import { gregorianValidation } from '../validation/gregorian-validation';

export function toGregorian(date: string): output {
      let { year, month, day, hour, minute, second, miliSecond } = dateSplicer(date);

      let { staus, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, MILISECOND } = gregorianValidation(
            year,
            month,
            day,
            hour,
            minute,
            second,
            miliSecond,
      );

      if(!staus){
            return {
                  year: 0,
                  month: 0,
                  day: 0,
                  hour: 0,
                  minute: 0,
                  second: 0,
                  miliSecond: 0,
            };
      }
      else{
            let JDays = howManyDaysArePast(MONTH, DAY);
            let GDays = howManyDaysArePastFromGregorian(JDays, YEAR);

            let GYear = calculateYear(YEAR, JDays);
            let MonthAndDay;
            if (isLeap(GYear)) {
                  MonthAndDay = calculateMonthAndDayInLeapYear(GDays);
            } else {
                  MonthAndDay = calculateMonthAndDayInOrdinaryYear(GDays);
            }
            return {
                  year: GYear,
                  month: MonthAndDay.month,
                  day: MonthAndDay.day,
                  hour: HOUR,
                  minute: MINUTE,
                  second: SECOND,
                  miliSecond: MILISECOND,
            };
      }      
}

interface output {
      year: number;
      month: number;
      day: number;
      hour: number;
      minute: number;
      second: number;
      miliSecond: number;
}
