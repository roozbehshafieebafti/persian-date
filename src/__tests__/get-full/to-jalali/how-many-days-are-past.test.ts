import { howManyDaysArePast } from '../../../get-full/to-jalali/how-many-days-are-past';

describe('test howManyDaysArePast', () => {
    it('howManyDaysArePast exists', () => {
        expect(howManyDaysArePast).toBeDefined();
    });

    it('functional test', () => {
        expect(howManyDaysArePast(2020,2,11)).toBe(42)
        expect(howManyDaysArePast(2020,3,23)).toBe(83)
        expect(howManyDaysArePast(2020,4,24)).toBe(115)
        expect(howManyDaysArePast(2020,5,25)).toBe(146)
        expect(howManyDaysArePast(2020,5,25)).toBe(146)
        expect(howManyDaysArePast(2020,6,26)).toBe(178)
        expect(howManyDaysArePast(2020,7,27)).toBe(209)
        expect(howManyDaysArePast(2020,8,28)).toBe(241)
        expect(howManyDaysArePast(2020,9,29)).toBe(273)
        expect(howManyDaysArePast(2020,10,31)).toBe(305)
        expect(howManyDaysArePast(2020,10,6)).toBe(280);
        expect(howManyDaysArePast(2020,11,6)).toBe(311);
        expect(howManyDaysArePast(2020,12,31)).toBe(366)


        expect(howManyDaysArePast(2019,2,11)).toBe(42)
        expect(howManyDaysArePast(2019,3,11)).toBe(70)
        expect(howManyDaysArePast(2019,4,12)).toBe(102)
        expect(howManyDaysArePast(2019,5,13)).toBe(133)
        expect(howManyDaysArePast(2019,6,14)).toBe(165)
        expect(howManyDaysArePast(2019,7,15)).toBe(196)
        expect(howManyDaysArePast(2019,8,16)).toBe(228)
        expect(howManyDaysArePast(2019,9,17)).toBe(260)
        expect(howManyDaysArePast(2019,10,18)).toBe(291)
        expect(howManyDaysArePast(2019,11,19)).toBe(323)
        expect(howManyDaysArePast(2019,12,11)).toBe(345)
    });
});