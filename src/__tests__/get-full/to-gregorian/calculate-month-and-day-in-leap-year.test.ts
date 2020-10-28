import { calculateMonthAndDayInLeapYear } from '../../../get-full/to-gregorian/calculate-month-and-day-in-leap-year';

describe('calculateMonthAndDayInLeapYear of the group', () => {
      it('should exists', () => {
            expect(calculateMonthAndDayInLeapYear).toBeDefined();
      });

      it('functional test 1', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(1);
            expect(day).toBe(1);
            expect(month).toBe(1);
      });
      it('functional test 2', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(17);
            expect(day).toBe(17);
            expect(month).toBe(1);
      });
      it('functional test 3', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(33);
            expect(day).toBe(2);
            expect(month).toBe(2);
      });
      it('functional test 4', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(63);
            expect(day).toBe(3);
            expect(month).toBe(3);
      });
      it('functional test 5', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(101);
            expect(day).toBe(10);
            expect(month).toBe(4);
      });
      it('functional test 6', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(132);
            expect(day).toBe(11);
            expect(month).toBe(5);
      });
      it('functional test 7', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(164);
            expect(day).toBe(12);
            expect(month).toBe(6);
      });
      it('functional test 8', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(195);
            expect(day).toBe(13);
            expect(month).toBe(7);
      });
      it('functional test 9', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(228);
            expect(day).toBe(15);
            expect(month).toBe(8);
      });
      it('functional test 10', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(264);
            expect(day).toBe(20);
            expect(month).toBe(9);
      });
      it('functional test 11', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(295);
            expect(day).toBe(21);
            expect(month).toBe(10);
      });
      it('functional test 12', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(327);
            expect(day).toBe(22);
            expect(month).toBe(11);
      });
      it('functional test 13', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(366);
            expect(day).toBe(31);
            expect(month).toBe(12);
      });
      it('functional test 14', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(365);
            expect(day).toBe(30);
            expect(month).toBe(12);
      });
      it('functional test 15', () => {
            let { day, month } = calculateMonthAndDayInLeapYear(345);
            expect(day).toBe(10);
            expect(month).toBe(12);
      });
});
