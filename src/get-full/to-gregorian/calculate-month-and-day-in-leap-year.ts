export function calculateMonthAndDayInLeapYear(Day: number): output {
      let month: number = 0;
      let day: number = 0;

      if (Day <= 31) {
            month = 1;
            day = Day;
      } else if (Day <= 60) {
            month = 2;
            day = Day - 31;
      } else if (Day <= 91) {
            month = 3;
            day = Day - 60;
      } else if (Day <= 121) {
            month = 4;
            day = Day - 91;
      } else if (Day <= 152) {
            month = 5;
            day = Day - 121;
      } else if (Day <= 182) {
            month = 6;
            day = Day - 152;
      } else if (Day <= 213) {
            month = 7;
            day = Day - 182;
      } else if (Day <= 244) {
            month = 8;
            day = Day - 213;
      } else if (Day <= 274) {
            month = 9;
            day = Day - 244;
      } else if (Day <= 305) {
            month = 10;
            day = Day - 274;
      } else if (Day <= 335) {
            month = 11;
            day = Day - 305;
      } else {
            month = 12;
            day = Day - 335;
      }

      return { day, month };
}

interface output {
      month: number;
      day: number;
}
