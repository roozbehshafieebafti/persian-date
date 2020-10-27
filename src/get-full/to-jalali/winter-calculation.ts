import { isLeap } from '../leap/is-leap';

export function winterCalculation(gYear: number, days: number): output {
      let year: number = 0,
            month: number = 0,
            day: number = 0;
      // year calculation
      year = gYear - 622;

      let dayDiffrence: number;
      if (isLeap(gYear - 1)) {
            dayDiffrence = 11;
      } else {
            dayDiffrence = 10;
      }

      let leftOver: number = (days + dayDiffrence) % 30;
      if (leftOver === 0) {
            month = Math.floor((days + dayDiffrence) / 30) + 9;
            day = 30;
      } else {
            month = Math.floor((days + dayDiffrence) / 30) + 10;
            day = leftOver;
      }
      return { year, month, day };
}

interface output {
      year: number;
      month: number;
      day: number;
}
