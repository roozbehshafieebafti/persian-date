import { cumulative } from './cumulative-day-of-year';

export function howManyDaysArePast(month: number, day: number) {
      return cumulative[month - 1] + day;
}
