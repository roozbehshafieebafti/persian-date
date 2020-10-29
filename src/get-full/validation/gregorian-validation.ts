export function gregorianValidation(...data: number[]): output {
      let result = {
            staus: true,
            YEAR: 0,
            MONTH: 0,
            DAY: 0,
            HOUR: 0,
            MINUTE: 0,
            SECOND: 0,
            MILISECOND: 0,
      };
      let [year, month, day, hour, minute, second, miliSecond] = data;

      if (!year || year <= 0) {
            result.staus = false;
            return result;
      } else {
            result.YEAR = year;
      }

      if (!month || month < 1 || month > 12) {
            result.staus = false;
            return result;
      } else {
            result.MONTH = month;
      }

      if (!day || day < 1 || day > 31) {
            result.staus = false;
            return result;
      } else {
            result.DAY = day;
      }

      if (hour >= 0 && hour <= 24) {
            result.HOUR = hour;
      }

      if (minute >= 0 && minute <= 59) {
            result.MINUTE = minute;
      }

      if (second >= 0 && second <= 59) {
            result.SECOND = second;
      }

      if (miliSecond > 0 && miliSecond <= 999) {
            result.MILISECOND = miliSecond;
      }

      return result;
}

interface output {
      staus: boolean;
      YEAR: number;
      MONTH: number;
      DAY: number;
      HOUR: number;
      MINUTE: number;
      SECOND: number;
      MILISECOND: number;
}
