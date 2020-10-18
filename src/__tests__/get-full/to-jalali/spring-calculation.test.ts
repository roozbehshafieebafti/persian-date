import { springCalculation } from '../../../get-full/to-jalali/spring-calculation';

describe('spring calculation group test', () => {
    it('should exists', () => {
        expect(springCalculation).toBeDefined();
    });

    it('functional testing in spring',()=>{
        expect(springCalculation(2020,80)).toStrictEqual({
            year: 1399,
            month: 1,
            day: 1
        });

        expect(springCalculation(2019,80)).toStrictEqual({
            year: 1398,
            month: 1,
            day: 1
        });

        expect(springCalculation(2018,80)).toStrictEqual({
            year: 1397,
            month: 1,
            day: 1
        });

        expect(springCalculation(2017,80)).toStrictEqual({
            year: 1396,
            month: 1,
            day: 1
        });

        expect(springCalculation(2021,80)).toStrictEqual({
            year: 1400,
            month: 1,
            day: 1
        });

        expect(springCalculation(2022,80)).toStrictEqual({
            year: 1401,
            month: 1,
            day: 1
        });

        expect(springCalculation(2022,265)).toStrictEqual({
            year: 1401,
            month: 6,
            day: 31
        });

        expect(springCalculation(2021,265)).toStrictEqual({
            year: 1400,
            month: 6,
            day: 31
        });

        expect(springCalculation(2020,265)).toStrictEqual({
            year: 1399,
            month: 6,
            day: 31
        });

        expect(springCalculation(2019,265)).toStrictEqual({
            year: 1398,
            month: 6,
            day: 31
        });

        expect(springCalculation(2018,265)).toStrictEqual({
            year: 1397,
            month: 6,
            day: 31
        });

        expect(springCalculation(2017,265)).toStrictEqual({
            year: 1396,
            month: 6,
            day: 31
        });

        expect(springCalculation(2016,265)).toStrictEqual({
            year: 1395,
            month: 6,
            day: 31
        });


        expect(springCalculation(2020,91)).toStrictEqual({
            year: 1399,
            month: 1,
            day: 12
        });

        expect(springCalculation(2020,110)).toStrictEqual({
            year: 1399,
            month: 1,
            day: 31
        });

        expect(springCalculation(2020,125)).toStrictEqual({
            year: 1399,
            month: 2,
            day: 15
        });

        expect(springCalculation(1994,114)).toStrictEqual({
            year: 1373,
            month: 2,
            day: 4
        });

        expect(springCalculation(2020,114)).toStrictEqual({
            year: 1399,
            month: 2,
            day: 4
        });


    });

    it('functional test in fall',()=>{
        expect(springCalculation(2020,266)).toStrictEqual({
            year: 1399,
            month: 7,
            day: 1
        });

        expect(springCalculation(2020,295)).toStrictEqual({
            year: 1399,
            month: 7,
            day: 30
        });

        expect(springCalculation(2020,321)).toStrictEqual({
            year: 1399,
            month: 8,
            day: 26
        });

        expect(springCalculation(1992,321)).toStrictEqual({
            year: 1371,
            month: 8,
            day: 26
        });

        expect(springCalculation(2019,321)).toStrictEqual({
            year: 1398,
            month: 8,
            day: 26
        });

        expect(springCalculation(2020,355)).toStrictEqual({
            year: 1399,
            month: 9,
            day: 30
        });

        expect(springCalculation(2020,366)).toStrictEqual({
            year: 1399,
            month: 10,
            day: 11
        });

    })
});