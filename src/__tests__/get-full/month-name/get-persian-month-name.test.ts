import { getPersianMonthName } from '../../../get-full/month-name/get-persian-month-name';

describe('getPersianMonthName of the group', () => {
    it('should exists', () => {
        expect(getPersianMonthName).toBeDefined();
    });

    it('functional test 1', () => {
        expect(getPersianMonthName(1)).toBe("فروردین");
    });
    it('functional test 2', () => {
        expect(getPersianMonthName(2)).toBe("اُردیبهشت");
    });
    it('functional test 3', () => {
        expect(getPersianMonthName(3)).toBe("خرداد");
    });
    it('functional test 4', () => {
        expect(getPersianMonthName(4)).toBe("تیر");
    });
    it('functional test 5', () => {
        expect(getPersianMonthName(5)).toBe("مرداد");
    });
    it('functional test 6', () => {
        expect(getPersianMonthName(6)).toBe("شهریور");
    });
    it('functional test 7', () => {
        expect(getPersianMonthName(7)).toBe("مهر");
    });
    it('functional test 8', () => {
        expect(getPersianMonthName(8)).toBe("آبان");
    });
    it('functional test 9', () => {
        expect(getPersianMonthName(9)).toBe("آذر");
    });
    it('functional test 10', () => {
        expect(getPersianMonthName(10)).toBe("دی");
    });
    it('functional test 11', () => {
        expect(getPersianMonthName(11)).toBe("بهمن");
    });
    it('functional test 12', () => {
        expect(getPersianMonthName(12)).toBe("اسفند");
    });
    it('functional test 13', () => {
        expect(getPersianMonthName(-1)).toBe("");
    });
});