import getFull from '../../get-full/index';

describe('test group of getFull', () => {
      it('should exist', () => {
            expect(getFull).toBeDefined();
      });

      it('functional test', () => {
            let {year, month, day} = getFull('1992/11/16','fa')
            expect(year).toBe(1371)
            expect(month).toBe(8)
            expect(day).toBe(26)
      });

      it('functional test', () => {
            let {year, month, day} = getFull('2019/11/16','fa')
            expect(year).toBe(1398)
            expect(month).toBe(8)
            expect(day).toBe(25)
      });

      it('functional test', () => {
            let {year, month, day} = getFull('2019/11/16','fa')
            expect(year).toBe(1398)
            expect(month).toBe(8)
            expect(day).toBe(25)
      });

      it('functional test', () => {
            let {year, month, day} = getFull('2019/11/16','fa')
            expect(year).toBe(1398)
            expect(month).toBe(8)
            expect(day).toBe(25)
      });

      it('functional test', () => {
            let {year, month, day} = getFull('1994/04/24','fa')
            expect(year).toBe(1373)
            expect(month).toBe(2)
            expect(day).toBe(4)
      });

      it('functional test', () => {
            let {year, month, day} = getFull('1996/06/16','fa')
            expect(year).toBe(1375)
            expect(month).toBe(3)
            expect(day).toBe(27)
      });

      it('functional test', () => {
            let {year, month, day} = getFull('2019/06/16','fa')
            expect(year).toBe(1398)
            expect(month).toBe(3)
            expect(day).toBe(26)
      });
});
