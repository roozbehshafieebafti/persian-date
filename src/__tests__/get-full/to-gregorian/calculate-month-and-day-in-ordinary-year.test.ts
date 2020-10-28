import { calculateMonthAndDayInOrdinaryYear } from '../../../get-full/to-gregorian/calculate-month-and-day-in-ordinary-year';

describe('calculateMonthAndDayInLeapYear of the group', () => {
      it('should exists', () => {
            expect(calculateMonthAndDayInOrdinaryYear).toBeDefined();
      });

      it('functional test 1', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(1);
            expect(day).toBe(1);
            expect(month).toBe(1);
      });

      it('functional test 2', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(46);
            expect(day).toBe(15);
            expect(month).toBe(2);
      });
      it('functional test 3', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(59);
            expect(day).toBe(28);
            expect(month).toBe(2);
      });
      it('functional test 3.5', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(80);
            expect(day).toBe(21);
            expect(month).toBe(3);
      });
      it('functional test 4', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(102);
            expect(day).toBe(12);
            expect(month).toBe(4);
      });
      it('functional test 5', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(145);
            expect(day).toBe(25);
            expect(month).toBe(5);
      });
      it('functional test 6', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(168);
            expect(day).toBe(17);
            expect(month).toBe(6);
      });
      it('functional test 7', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(191);
            expect(day).toBe(10);
            expect(month).toBe(7);
      });
      it('functional test 8', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(240);
            expect(day).toBe(28);
            expect(month).toBe(8);
      });

      it('functional test 9', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(247);
            expect(day).toBe(4);
            expect(month).toBe(9);
      });
      it('functional test 10', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(284);
            expect(day).toBe(11);
            expect(month).toBe(10);
      });
      it('functional test 11', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(327);
            expect(day).toBe(23);
            expect(month).toBe(11);
      });
      it('functional test 12', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(365);
            expect(day).toBe(31);
            expect(month).toBe(12);
      });
      it('functional test 13', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(364);
            expect(day).toBe(30);
            expect(month).toBe(12);
      });

      it('functional test 14', () => {
            let { day, month } = calculateMonthAndDayInOrdinaryYear(344);
            expect(day).toBe(10);
            expect(month).toBe(12);
      });
});
