import { getGregorianMonthName } from '../../../get-full/month-name/get-gregorian-month-name';

describe('getGregorianMonthName of the group', () => {
    it('should exists', () => {
        expect(getGregorianMonthName).toBeDefined();
    });

    it('functional test 1', () => {
        expect(getGregorianMonthName(1)).toBe("January");
    });
    it('functional test 2', () => {
        expect(getGregorianMonthName(2)).toBe("February");
    });
    it('functional test 3', () => {
        expect(getGregorianMonthName(3)).toBe("March");
    });
    it('functional test 4', () => {
        expect(getGregorianMonthName(4)).toBe("April");
    });
    it('functional test 5', () => {
        expect(getGregorianMonthName(5)).toBe("May");
    });
    it('functional test 6', () => {
        expect(getGregorianMonthName(6)).toBe("June");
    });
    it('functional test 7', () => {
        expect(getGregorianMonthName(7)).toBe("July");
    });
    it('functional test 8', () => {
        expect(getGregorianMonthName(8)).toBe("August");
    });
    it('functional test 9', () => {
        expect(getGregorianMonthName(9)).toBe("September");
    });
    it('functional test 10', () => {
        expect(getGregorianMonthName(10)).toBe("October");
    });
    it('functional test 11', () => {
        expect(getGregorianMonthName(11)).toBe("November");
    });
    it('functional test 12', () => {
        expect(getGregorianMonthName(12)).toBe("December");
    });
    it('functional test 13', () => {
        expect(getGregorianMonthName(-1)).toBe("");
    });
});