import { toGregorian } from '../../../get-full/to-gregorian/to-gregorian';

describe('toGregorian of the group', () => {
      it('should exists', () => {
            expect(toGregorian).toBeDefined();
      });

      it('functional test 1', () => {
            let { year, month, day, numeric } = toGregorian('1371/08/26T20:30:00.0');

            expect(year).toBe(1992);
            expect(month).toBe(11);
            expect(day).toBe(16);
            expect(numeric).toBe(721945800000)
      });

      it('functional test 2', () => {
            let { year, month, day, numeric } = toGregorian('1375/03/27');

            expect(year).toBe(1996);
            expect(month).toBe(6);
            expect(day).toBe(16);
            expect(numeric).toBe(834883200000);
      });

      it('functional test 3', () => {
            let { year, month, day, dayName } = toGregorian('1399\\7\\19');

            expect(year).toBe(2020);
            expect(month).toBe(10);
            expect(day).toBe(10);
            expect(dayName).toBe(6);
      });

      it('functional test 4', () => {
            let { year, month, day } = toGregorian('1377/08/26');

            expect(year).toBe(1998);
            expect(month).toBe(11);
            expect(day).toBe(17);
      });

      it(' functional test 5', () => {
            let { year, month, day, dayName } = toGregorian('1399 6 31 2020 09 21');
            expect(year).toBe(2020);
            expect(month).toBe(9);
            expect(day).toBe(21);
            expect(dayName).toBe(1);
      });

      it(' functional test 6', () => {
            let { year, month, day, dayName } = toGregorian('1399+5+26');
            expect(year).toBe(2020);
            expect(month).toBe(8);
            expect(day).toBe(16);
            expect(dayName).toBe(0);
      });
      
      it(' functional test 7', () => {
            let { year, month, day, dayName } = toGregorian('1399-05-01');
            expect(year).toBe(2020);
            expect(month).toBe(7);
            expect(day).toBe(22);
            expect(dayName).toBe(3);
      });

      it(' functional test 8', () => {
            let { year, month, day } = toGregorian('1399-4-18');
            expect(year).toBe(2020);
            expect(month).toBe(7);
            expect(day).toBe(8);
      });

      //===========================================================================================================================================================================================================================================================================================================================================
      //                                                                                                                                                                                                                                                                                                                                           
      //  ##      ##  ##  ######  ##   ##        ##   ##   #####   ##   ##  #####                                                                                                                                                                                                                                                                
      //  ##      ##  ##    ##    ##   ##        ##   ##  ##   ##  ##   ##  ##  ##                                                                                                                                                                                                                                                               
      //  ##  ##  ##  ##    ##    #######        #######  ##   ##  ##   ##  #####                                                                                                                                                                                                                                                                
      //  ##  ##  ##  ##    ##    ##   ##        ##   ##  ##   ##  ##   ##  ##  ##                                                                                                                                                                                                                                                               
      //   ###  ###   ##    ##    ##   ##        ##   ##   #####    #####   ##   ##                                                                                                                                                                                                                                                              
      //                                                                                                                                                                                                                                                                                                                                           
      //===========================================================================================================================================================================================================================================================================================================================================

      it(' functional test 9', () => {
            let { year, month, day, hour, minute, second, miliSecond, numeric } = toGregorian('1399-4-18T03:12:40.342Z');
            expect(year).toBe(2020);
            expect(month).toBe(7);
            expect(day).toBe(8);

            expect(hour).toBe(3);
            expect(minute).toBe(12);
            expect(second).toBe(40);
            expect(miliSecond).toBe(342);
            expect(numeric).toBe(1594177960342);
      });

      it(' functional test 10', () => {
            let { year, month, day, hour, minute, second, miliSecond } = toGregorian('1399-4-18T25:60:60.342Z');
            expect(year).toBe(2020);
            expect(month).toBe(7);
            expect(day).toBe(8);

            expect(hour).toBe(0);
            expect(minute).toBe(0);
            expect(second).toBe(0);
            expect(miliSecond).toBe(342);
      });

      it(' functional test 11', () => {
            let { year, month, day, hour, minute, second, miliSecond } = toGregorian('1399-4-18T02:00:0.342Z');
            expect(year).toBe(2020);
            expect(month).toBe(7);
            expect(day).toBe(8);

            expect(hour).toBe(2);
            expect(minute).toBe(0);
            expect(second).toBe(0);
            expect(miliSecond).toBe(342);
      });

      it(' functional test 12', () => {
            let { year, month, day, hour, minute, second, miliSecond } = toGregorian('1399-13-18T2:0:0.342Z');
            expect(year).toBe(0);
            expect(month).toBe(0);
            expect(day).toBe(0);
            
            expect(hour).toBe(0);
            expect(minute).toBe(0);
            expect(second).toBe(0);
            expect(miliSecond).toBe(0);
      });
});
