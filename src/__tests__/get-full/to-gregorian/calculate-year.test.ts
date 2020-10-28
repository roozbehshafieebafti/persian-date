import { calculateYear } from '../../../get-full/to-gregorian/calculate-year';

describe('calculateYear of the group', () => {
      it('should exists', () => {
            expect(calculateYear).toBeDefined();
      });

      it('functional test 1', () => {
            let result = calculateYear(1399, 1);
            expect(result).toBe(2020);
      });
      it('functional test 2', () => {
            let result = calculateYear(1399, 46);
            expect(result).toBe(2020);
      });
      it('functional test 3', () => {
            let result = calculateYear(1399, 186);
            expect(result).toBe(2020);
      });
      it('functional test 4', () => {
            let result = calculateYear(1399, 287);
            expect(result).toBe(2020);
      });
      it('functional test 5', () => {
            let result = calculateYear(1399, 288);
            expect(result).toBe(2021);
      });
      it('functional test 6', () => {
            let result = calculateYear(1399, 334);
            expect(result).toBe(2021);
      });
      it('functional test 7', () => {
            let result = calculateYear(1399, 366);
            expect(result).toBe(2021);
      });

      it('functional test 7', () => {
            let result = calculateYear(1398, 1);
            expect(result).toBe(2019);
      });
      it('functional test 8', () => {
            let result = calculateYear(1398, 50);
            expect(result).toBe(2019);
      });

      it('functional test 9', () => {
            let result = calculateYear(1398, 100);
            expect(result).toBe(2019);
      });
      it('functional test 10', () => {
            let result = calculateYear(1398, 180);
            expect(result).toBe(2019);
      });

      it('functional test 11', () => {
            let result = calculateYear(1398, 286);
            expect(result).toBe(2019);
      });

      it('functional test 12', () => {
            let result = calculateYear(1398, 287);
            expect(result).toBe(2020);
      });
      it('functional test 13', () => {
            let result = calculateYear(1398, 350);
            expect(result).toBe(2020);
      });
});
