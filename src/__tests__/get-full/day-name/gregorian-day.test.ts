import { gregorianDay } from '../../../get-full/day-name/gregorian-day';


describe('Name of the group', () => {
    it('should exists', () => {
        expect(gregorianDay).toBeDefined();
    });

    it('functional test 1', () => {
        let result = gregorianDay(0)
        expect(result).toBe('Sunday')
    });
    it('functional test 2', () => {
        let result = gregorianDay(1)
        expect(result).toBe('Monday')
    });
    it('functional test 3', () => {
        let result = gregorianDay(2)
        expect(result).toBe('Tuesday')
    });
    it('functional test 4', () => {
        let result = gregorianDay(3)
        expect(result).toBe('Wednesday')
    });
    it('functional test 5', () => {
        let result = gregorianDay(4)
        expect(result).toBe('Thursday')
    });
    it('functional test 6', () => {
        let result = gregorianDay(5)
        expect(result).toBe('Friday')
    });
    it('functional test 7', () => {
        let result = gregorianDay(6)
        expect(result).toBe('Saturday')
    });

    it('functional test 8', () => {
        let result = gregorianDay(30)
        expect(result).toBe('')
    });
});