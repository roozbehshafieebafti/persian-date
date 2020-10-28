import { isLeap } from '../leap/is-leap';

export function howManyDaysArePastFromGregorian(day: number, Jyear: number): number {
      let temp = Jyear + 621;
      let Day: number;
      if (isLeap(temp)) {
            if (day <= 287) {
                  Day = day + 79;
            } else {
                  Day = day - 287;
            }
      } else {
            if (day <= 286) {
                  Day = day + 79;
            } else {
                  Day = day - 286;
            }
      }

      return Day;
}
