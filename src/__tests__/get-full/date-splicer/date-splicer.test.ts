import { dateSplicer } from '../../../get-full/date-splicer/date-splicer';

describe('test date splicer function', () => {
      it('function exists', () => {
            expect(dateSplicer).toBeDefined();
      });

      it('date splicer functional test 1', () => {
            expect(dateSplicer('1339-9-09_12:45:37')).toStrictEqual({
                  year: 1339,
                  month: 9,
                  day: 9,
                  hour: 12,
                  minute: 45,
                  second: 37,
                  miliSecond: 0,
            });
      });

      it('date splicer functional test 2', () => {
            expect(dateSplicer(' 1999 / 12 / 09 _ 10 : 4 : 37.355')).toStrictEqual({
                  year: 1999,
                  month: 12,
                  day: 9,
                  hour: 10,
                  minute: 4,
                  second: 37,
                  miliSecond: 355,
            });
      });

      it('date splicer functional test 3', () => {
            expect(dateSplicer('/ 12 / 09 _ 10 : 4 : 37.355')).toStrictEqual({
                  year: 12,
                  month: 9,
                  day: 10,
                  hour: 4,
                  minute: 37,
                  second: 355,
                  miliSecond: 0,
            });
      });

      it('date splicer functional test 4', () => {
            expect(dateSplicer('/ jj / 09 _ 10 : 4 : 37.355')).toStrictEqual({
                  year: 9,
                  month: 10,
                  day: 4,
                  hour: 37,
                  minute: 355,
                  second: 0,
                  miliSecond: 0,
            });
      });

      it('date splicer functional test 5', () => {
            expect(dateSplicer('ssdfgdsfsdfbhsdfergergergrbet')).toStrictEqual({
                  year: -1,
                  month: -1,
                  day: -1,
                  hour: 0,
                  minute: 0,
                  second: 0,
                  miliSecond: 0,
            });
      });

      it('date splicer functional test 6', () => {
            expect(dateSplicer('1339/9/09T12:45:37.32 PM')).toStrictEqual({
                  year: 1339,
                  month: 9,
                  day: 9,
                  hour: 12,
                  minute: 45,
                  second: 37,
                  miliSecond: 32,
            });
      });
});
