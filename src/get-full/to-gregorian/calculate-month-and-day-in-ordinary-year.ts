export function calculateMonthAndDayInOrdinaryYear(Day: number): output {
      let month: number = 0;
      let day: number = 0;

      if (Day <= 31) {
            month = 1;
            day = Day;
      } else if (Day <= 59) {
            month = 2;
            day = Day - 31;
      } else if (Day <= 90) {
            month = 3;
            day = Day - 59;
      } else if (Day <= 120) {
            month = 4;
            day = Day - 90;
      } else if (Day <= 151) {
            month = 5;
            day = Day - 120;
      } else if (Day <= 181) {
            month = 6;
            day = Day - 151;
      } else if (Day <= 212) {
            month = 7;
            day = Day - 181;
      } else if (Day <= 243) {
            month = 8;
            day = Day - 212;
      } else if (Day <= 273) {
            month = 9;
            day = Day - 243;
      } else if (Day <= 304) {
            month = 10;
            day = Day - 273;
      } else if (Day <= 334) {
            month = 11;
            day = Day - 304;
      } else {
            month = 12;
            day = Day - 334;
      }

      return { day, month };
}

interface output {
      month: number;
      day: number;
}
