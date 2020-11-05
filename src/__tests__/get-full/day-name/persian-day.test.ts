import { persianDay } from '../../../get-full/day-name/persian-day';

describe('persianDay of the group', () => {
    it('should exists', () => {
        expect(persianDay).toBeDefined();
    });

    it('functional test 1', () => {
        let result = persianDay(0)
        expect(result).toBe('یکشنبه')
    });
    it('functional test 2', () => {
        let result = persianDay(1)
        expect(result).toBe('دوشنبه')
    });
    it('functional test 3', () => {
        let result = persianDay(2)
        expect(result).toBe('سه‌شنبه')
    });
    it('functional test 4', () => {
        let result = persianDay(3)
        expect(result).toBe('چهارشنبه')
    });
    it('functional test 5', () => {
        let result = persianDay(4)
        expect(result).toBe('پنج‌شنبه')
    });
    it('functional test 6', () => {
        let result = persianDay(5)
        expect(result).toBe('جمعه')
    });
    it('functional test 7', () => {
        let result = persianDay(6)
        expect(result).toBe('شنبه')
    });

    it('functional test 8', () => {
        let result = persianDay(30)
        expect(result).toBe('')
    });
});