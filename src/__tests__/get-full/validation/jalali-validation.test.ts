import { jalaliValidation } from '../../../get-full/validation/jalali-validation';

describe('validation of the group', () => {
      it('should exists', () => {
            expect(jalaliValidation).toBeDefined();
      });

      it('functional test 1', () => {
            let { staus } = jalaliValidation();
            expect(staus).toBeFalsy();
      });

      it('functional test 2', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(622, 10, 1);
            expect(staus).toBeFalsy();
      });

      it('functional test 3', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(623, 13, 1);
            expect(staus).toBeFalsy();
      });

      it('functional test 4', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(623, 12, 32);
            expect(staus).toBeFalsy();
      });

      it('functional test 4.5', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(623);
            expect(staus).toBeFalsy();
      });

      it('functional test 5', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(623, 11);
            expect(staus).toBeFalsy();
      });

      it('functional test 6', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(623, 10, 20);
            expect(staus).toBeTruthy();
            expect(YEAR).toBe(623);
            expect(MONTH).toBe(10);
            expect(DAY).toBe(20);

            expect(HOUR).toBe(0);
            expect(MILISECOND).toBe(0);
            expect(MINUTE).toBe(0);
            expect(SECOND).toBe(0);
      });

      it('functional test 7', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(
                  623,
                  10,
                  20,
                  25,
                  60,
                  60,
                  3,
            );
            expect(staus).toBeTruthy();
            expect(YEAR).toBe(623);
            expect(MONTH).toBe(10);
            expect(DAY).toBe(20);

            expect(HOUR).toBe(0);
            expect(MINUTE).toBe(0);
            expect(SECOND).toBe(0);
            expect(MILISECOND).toBe(3);
      });

      it('functional test 8', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(
                  623,
                  10,
                  20,
                  2,
                  6,
                  6,
                  3000,
            );
            expect(staus).toBeTruthy();
            expect(YEAR).toBe(623);
            expect(MONTH).toBe(10);
            expect(DAY).toBe(20);

            expect(HOUR).toBe(2);
            expect(MINUTE).toBe(6);
            expect(SECOND).toBe(6);
            expect(MILISECOND).toBe(0);
      });

      it('functional test 9', () => {
            let { staus, DAY, MONTH, MINUTE, MILISECOND, YEAR, SECOND, HOUR } = jalaliValidation(
                  623,
                  10,
                  20,
                  2,
                  6,
                  6,
                  300,
            );
            expect(staus).toBeTruthy();
            expect(YEAR).toBe(623);
            expect(MONTH).toBe(10);
            expect(DAY).toBe(20);

            expect(HOUR).toBe(2);
            expect(MINUTE).toBe(6);
            expect(SECOND).toBe(6);
            expect(MILISECOND).toBe(300);
      });
});
