import { toJalali } from '../../../get-full/to-jalali/to-jalali';

describe('toJalali group test', () => {
    it('should exist', () => {
        expect(toJalali).toBeDefined();
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020/10/10')
        expect(year).toBe(1399);
        expect(month).toBe(7);
        expect(day).toBe(19);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020-8-22')
        expect(year).toBe(1399);
        expect(month).toBe(6);
        expect(day).toBe(1);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020 09 21')
        expect(year).toBe(1399);
        expect(month).toBe(6);
        expect(day).toBe(31);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020+8+16')
        expect(year).toBe(1399);
        expect(month).toBe(5);
        expect(day).toBe(26);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020\\7\\22')
        expect(year).toBe(1399);
        expect(month).toBe(5);
        expect(day).toBe(1);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020_7_8')
        expect(year).toBe(1399);
        expect(month).toBe(4);
        expect(day).toBe(18);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020/5/31')
        expect(year).toBe(1399);
        expect(month).toBe(3);
        expect(day).toBe(11);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020/3/20')
        expect(year).toBe(1399);
        expect(month).toBe(1);
        expect(day).toBe(1);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020/11/16')
        expect(year).toBe(1399);
        expect(month).toBe(8);
        expect(day).toBe(26);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2020/12/20')
        expect(year).toBe(1399);
        expect(month).toBe(9);
        expect(day).toBe(30);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2021/1/1')
        expect(day).toBe(12);
        expect(month).toBe(10);
        expect(year).toBe(1399);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2021/1/19')
        expect(year).toBe(1399);
        expect(month).toBe(10);
        expect(day).toBe(30);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2021/2/10')
        expect(year).toBe(1399);
        expect(month).toBe(11);
        expect(day).toBe(22);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2021/3/20')
        expect(year).toBe(1399);
        expect(month).toBe(12);
        expect(day).toBe(30);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/3/21')
        expect(year).toBe(1396);
        expect(month).toBe(1);
        expect(day).toBe(1);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/4/14')
        expect(year).toBe(1396);
        expect(month).toBe(1);
        expect(day).toBe(25);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/5/1')
        expect(year).toBe(1396);
        expect(month).toBe(2);
        expect(day).toBe(11);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/5/19')
        expect(year).toBe(1396);
        expect(month).toBe(2);
        expect(day).toBe(29);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/6/30')
        expect(year).toBe(1396);
        expect(month).toBe(4);
        expect(day).toBe(9);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/8/1')
        expect(year).toBe(1396);
        expect(month).toBe(5);
        expect(day).toBe(10);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/8/23')
        expect(year).toBe(1396);
        expect(month).toBe(6);
        expect(day).toBe(1);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/8/23')
        expect(year).toBe(1396);
        expect(month).toBe(6);
        expect(day).toBe(1);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/10/6')
        expect(year).toBe(1396);
        expect(month).toBe(7);
        expect(day).toBe(14);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/11/17')
        expect(year).toBe(1396);
        expect(month).toBe(8);
        expect(day).toBe(26);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2017/12/31')
        expect(year).toBe(1396);
        expect(month).toBe(10);
        expect(day).toBe(10);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2018/3/20')
        expect(year).toBe(1396);
        expect(month).toBe(12);
        expect(day).toBe(29);
    });

    it(' functional test', () => {
        let {year,month,day} = toJalali('2018/3/21')
        expect(year).toBe(1397);
        expect(month).toBe(1);
        expect(day).toBe(1);
    });
});