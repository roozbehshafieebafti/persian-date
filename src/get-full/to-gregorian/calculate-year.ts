import { isLeap } from '../leap/is-leap';

export function calculateYear(Jyear: number, day: number): number {
      let temp = Jyear + 621;

      let year: number;
      if (isLeap(temp)) {
            if (day > 287) {
                  year = Jyear + 622;
            } else {
                  year = Jyear + 621;
            }
      } else {
            if (day > 286) {
                  year = Jyear + 622;
            } else {
                  year = Jyear + 621;
            }
      }
      return year;
}
