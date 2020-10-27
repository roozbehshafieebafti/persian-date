import { isLeap } from '../../../get-full/leap/is-leap';

describe('test leap year', () => {
      it('isLeep exists?', () => {
            expect(isLeap).toBeDefined();
      });

      it('functional test -> true result', () => {
            expect(isLeap(1804)).toBeTruthy();
            expect(isLeap(1812)).toBeTruthy();
            expect(isLeap(1824)).toBeTruthy();
            expect(isLeap(1848)).toBeTruthy();
            expect(isLeap(1860)).toBeTruthy();
            expect(isLeap(1896)).toBeTruthy();
            expect(isLeap(1904)).toBeTruthy();
            expect(isLeap(1996)).toBeTruthy();
            expect(isLeap(2000)).toBeTruthy();
            expect(isLeap(2012)).toBeTruthy();
            expect(isLeap(2024)).toBeTruthy();
            expect(isLeap(2028)).toBeTruthy();
            expect(isLeap(2052)).toBeTruthy();
            expect(isLeap(2120)).toBeTruthy();
            expect(isLeap(2104)).toBeTruthy();
            expect(isLeap(2076)).toBeTruthy();
            expect(isLeap(2060)).toBeTruthy();
            expect(isLeap(1972)).toBeTruthy();
            expect(isLeap(1940)).toBeTruthy();
      });

      it('functional test -> false result', () => {
            expect(isLeap(1900)).toBeFalsy();
            expect(isLeap(1800)).toBeFalsy();
            expect(isLeap(1700)).toBeFalsy();
            expect(isLeap(2010)).toBeFalsy();
            expect(isLeap(2019)).toBeFalsy();
            expect(isLeap(2013)).toBeFalsy();
            expect(isLeap(2007)).toBeFalsy();
            expect(isLeap(2006)).toBeFalsy();
            expect(isLeap(1819)).toBeFalsy();
            expect(isLeap(1806)).toBeFalsy();
      });
});
