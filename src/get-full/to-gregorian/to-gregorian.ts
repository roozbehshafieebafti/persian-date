import { dateSplicer } from '../date-splicer/date-splicer';
import { isLeap } from '../leap/is-leap';
import { calculateMonthAndDayInLeapYear } from './calculate-month-and-day-in-leap-year';
import { calculateMonthAndDayInOrdinaryYear } from './calculate-month-and-day-in-ordinary-year';
import { calculateYear } from './calculate-year';
import { howManyDaysArePast } from './how-many-days-are-past';
import { howManyDaysArePastFromGregorian } from './how-many-days-are-past-from-gregorian';

export function toGregorian(date: string):output {
      let { year, month, day, hour, minute, second, miliSecond } = dateSplicer(date);
      let JDays = howManyDaysArePast(month, day);
      let GDays = howManyDaysArePastFromGregorian(JDays, year);

      let GYear =calculateYear(year,JDays);
      let MonthAndDay;
      if(isLeap(GYear)){
            MonthAndDay= calculateMonthAndDayInLeapYear(GDays);

      }
      else{
            MonthAndDay = calculateMonthAndDayInOrdinaryYear(GDays);
      }

      return {
            year: GYear,
            month: MonthAndDay.month,
            day: MonthAndDay.day,
            hour, 
            minute, 
            second, 
            miliSecond
      }
}


interface output{
      year:number;
      month:number;
      day:number;
      hour:number; 
      minute:number; 
      second:number; 
      miliSecond:number
}
