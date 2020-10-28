import { toGregorian } from '../../../get-full/to-gregorian/to-gregorian';

describe('toGregorian of the group', () => {
    it('should exists', () => {
        expect(toGregorian).toBeDefined();
    });

    it('functional test 1', () => {
        let { year, month , day } = toGregorian('1371/08/26');

        expect(year).toBe(1992);
        expect(month).toBe(11);
        expect(day).toBe(16);
    });

    it('functional test 2', () => {
        let { year, month , day } = toGregorian('1375/03/27');

        expect(year).toBe(1996);
        expect(month).toBe(6);
        expect(day).toBe(16);
    });

    it('functional test 3', () => {
        let { year, month , day } = toGregorian('1399\\7\\19');

        expect(year).toBe(2020);
        expect(month).toBe(10);
        expect(day).toBe(10);
    });

    it('functional test 4', () => {
        let { year, month , day } = toGregorian('1377/08/26');

        expect(year).toBe(1998);
        expect(month).toBe(11);
        expect(day).toBe(17);
    });

    
    it(' functional test 5', () => {
        let { year, month, day } = toGregorian('1399 6 31 2020 09 21');
        expect(year).toBe(2020);
        expect(month).toBe(9);
        expect(day).toBe(21);
  });

  it(' functional test 6', () => {
        let { year, month, day } = toGregorian('1399+5+26');
        expect(year).toBe(2020);
        expect(month).toBe(8);
        expect(day).toBe(16);
    });

  it(' functional test 7', () => {
        let { year, month, day } = toGregorian('1399-05-01T20\\7\\22');
        expect(year).toBe(2020);
        expect(month).toBe(7);
        expect(day).toBe(22);
    });

  it(' functional test 8', () => {
        let { year, month, day } = toGregorian('1399-4-18');
        expect(year).toBe(2020);
        expect(month).toBe(7);
        expect(day).toBe(8);
    });
});