import { winterCalculation } from '../../../get-full/to-jalali/winter-calculation';

describe('winterCalculation group test', () => {
      it('it should exists', () => {
            expect(winterCalculation).toBeDefined();
      });

      it('functional test', () => {
            expect(winterCalculation(2020, 1)).toStrictEqual({
                  year: 1398,
                  month: 10,
                  day: 11,
            });

            expect(winterCalculation(2020, 20)).toStrictEqual({
                  year: 1398,
                  month: 10,
                  day: 30,
            });

            expect(winterCalculation(2020, 43)).toStrictEqual({
                  year: 1398,
                  month: 11,
                  day: 23,
            });

            expect(winterCalculation(2020, 79)).toStrictEqual({
                  year: 1398,
                  month: 12,
                  day: 29,
            });

            expect(winterCalculation(2021, 79)).toStrictEqual({
                  year: 1399,
                  month: 12,
                  day: 30,
            });

            expect(winterCalculation(2021, 1)).toStrictEqual({
                  year: 1399,
                  month: 10,
                  day: 12,
            });

            expect(winterCalculation(2017, 79)).toStrictEqual({
                  year: 1395,
                  month: 12,
                  day: 30,
            });
      });
});
