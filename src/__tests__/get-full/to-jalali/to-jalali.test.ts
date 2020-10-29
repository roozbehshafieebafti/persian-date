import { toJalali } from '../../../get-full/to-jalali/to-jalali';

describe('toJalali group test', () => {
      it('should exist', () => {
            expect(toJalali).toBeDefined();
      });

      it(' functional test 1', () => {
            let { year, month, day } = toJalali('2020/10/10');
            expect(year).toBe(1399);
            expect(month).toBe(7);
            expect(day).toBe(19);
      });

      it(' functional test 2', () => {
            let { year, month, day } = toJalali('2020-8-22');
            expect(year).toBe(1399);
            expect(month).toBe(6);
            expect(day).toBe(1);
      });

      it(' functional test 3', () => {
            let { year, month, day } = toJalali('2020 09 21');
            expect(year).toBe(1399);
            expect(month).toBe(6);
            expect(day).toBe(31);
      });

      it(' functional test 4', () => {
            let { year, month, day } = toJalali('2020+8+16');
            expect(year).toBe(1399);
            expect(month).toBe(5);
            expect(day).toBe(26);
      });

      it(' functional test 5', () => {
            let { year, month, day } = toJalali('2020\\7\\22');
            expect(year).toBe(1399);
            expect(month).toBe(5);
            expect(day).toBe(1);
      });

      it(' functional test 6 ', () => {
            let { year, month, day } = toJalali('2020_7_8');
            expect(year).toBe(1399);
            expect(month).toBe(4);
            expect(day).toBe(18);
      });

      it(' functional test 7 ', () => {
            let { year, month, day } = toJalali('2020/5/31');
            expect(year).toBe(1399);
            expect(month).toBe(3);
            expect(day).toBe(11);
      });

      it(' functional test 8', () => {
            let { year, month, day } = toJalali('2020/3/20');
            expect(year).toBe(1399);
            expect(month).toBe(1);
            expect(day).toBe(1);
      });

      it(' functional test 9', () => {
            let { year, month, day } = toJalali('2020/11/16');
            expect(year).toBe(1399);
            expect(month).toBe(8);
            expect(day).toBe(26);
      });

      it(' functional test 10', () => {
            let { year, month, day } = toJalali('2020/12/20');
            expect(year).toBe(1399);
            expect(month).toBe(9);
            expect(day).toBe(30);
      });

      it(' functional test 11', () => {
            let { year, month, day } = toJalali('2021/1/1');
            expect(day).toBe(12);
            expect(month).toBe(10);
            expect(year).toBe(1399);
      });

      it(' functional test 12', () => {
            let { year, month, day } = toJalali('2021/1/19');
            expect(year).toBe(1399);
            expect(month).toBe(10);
            expect(day).toBe(30);
      });

      it(' functional test 13 ', () => {
            let { year, month, day } = toJalali('2021/2/10');
            expect(year).toBe(1399);
            expect(month).toBe(11);
            expect(day).toBe(22);
      });

      it(' functional test 14', () => {
            let { year, month, day } = toJalali('2021/3/20');
            expect(year).toBe(1399);
            expect(month).toBe(12);
            expect(day).toBe(30);
      });

      it(' functional test 15', () => {
            let { year, month, day } = toJalali('2017/3/21');
            expect(year).toBe(1396);
            expect(month).toBe(1);
            expect(day).toBe(1);
      });

      it(' functional test 16', () => {
            let { year, month, day } = toJalali('2017/4/14');
            expect(year).toBe(1396);
            expect(month).toBe(1);
            expect(day).toBe(25);
      });

      it(' functional test 17', () => {
            let { year, month, day } = toJalali('2017/5/1');
            expect(year).toBe(1396);
            expect(month).toBe(2);
            expect(day).toBe(11);
      });

      it(' functional test 18', () => {
            let { year, month, day } = toJalali('2017/5/19');
            expect(year).toBe(1396);
            expect(month).toBe(2);
            expect(day).toBe(29);
      });

      it(' functional test 19', () => {
            let { year, month, day } = toJalali('2017/6/30');
            expect(year).toBe(1396);
            expect(month).toBe(4);
            expect(day).toBe(9);
      });

      it(' functional test 20', () => {
            let { year, month, day } = toJalali('2017/8/1');
            expect(year).toBe(1396);
            expect(month).toBe(5);
            expect(day).toBe(10);
      });

      it(' functional test 21', () => {
            let { year, month, day } = toJalali('2017/8/23');
            expect(year).toBe(1396);
            expect(month).toBe(6);
            expect(day).toBe(1);
      });

      it(' functional test 22', () => {
            let { year, month, day } = toJalali('2017/8/23');
            expect(year).toBe(1396);
            expect(month).toBe(6);
            expect(day).toBe(1);
      });

      it(' functional test 23', () => {
            let { year, month, day } = toJalali('2017/10/6');
            expect(year).toBe(1396);
            expect(month).toBe(7);
            expect(day).toBe(14);
      });

      it(' functional test 24', () => {
            let { year, month, day } = toJalali('2017/11/17');
            expect(year).toBe(1396);
            expect(month).toBe(8);
            expect(day).toBe(26);
      });

      it(' functional test 25', () => {
            let { year, month, day } = toJalali('2017/12/31');
            expect(year).toBe(1396);
            expect(month).toBe(10);
            expect(day).toBe(10);
      });

      it(' functional test 26', () => {
            let { year, month, day } = toJalali('2018/3/20');
            expect(year).toBe(1396);
            expect(month).toBe(12);
            expect(day).toBe(29);
      });

      it(' functional test 27', () => {
            let { year, month, day } = toJalali('2018/3/21');
            expect(year).toBe(1397);
            expect(month).toBe(1);
            expect(day).toBe(1);
      });

      it(' functional test 27', () => {
            let { year, month, day } = toJalali('2025/3/21');
            expect(year).toBe(1404);
            expect(month).toBe(1);
            expect(day).toBe(1);
      });

      //===============================================================================================================================================================================================================================================================================================================================================================================
      //
      //  ##      ##  ##  ######  ##   ##        ##   ##   #####   ##   ##  #####          ######  #####   ####  ######
      //  ##      ##  ##    ##    ##   ##        ##   ##  ##   ##  ##   ##  ##  ##           ##    ##     ##       ##
      //  ##  ##  ##  ##    ##    #######        #######  ##   ##  ##   ##  #####            ##    #####   ###     ##
      //  ##  ##  ##  ##    ##    ##   ##        ##   ##  ##   ##  ##   ##  ##  ##           ##    ##        ##    ##
      //   ###  ###   ##    ##    ##   ##        ##   ##   #####    #####   ##   ##          ##    #####  ####     ##
      //
      //===============================================================================================================================================================================================================================================================================================================================================================================

      it('functional test with hour', () => {
            let { miliSecond, second, minute, hour } = toJalali('2018/3/21_15:13:15.800');
            expect(hour).toBe(15);
            expect(minute).toBe(13);
            expect(second).toBe(15);
            expect(miliSecond).toBe(800);
      });

      it('functional test with hour 1', () => {
            let { miliSecond, second, minute, hour, year, month, day } = toJalali('600/3/21_15:13:15.800');
            expect(year).toBe(0);
            expect(month).toBe(0);
            expect(day).toBe(0);
            expect(hour).toBe(0);
            expect(minute).toBe(0);
            expect(second).toBe(0);
            expect(miliSecond).toBe(0);
      });

      it('functional test with hour 2', () => {
            let { miliSecond, second, minute, hour, year, month, day } = toJalali('2020/3/21_25:13:15.800');
            expect(year).toBe(1399);
            expect(month).toBe(1);
            expect(day).toBe(2);
            expect(hour).toBe(0);
            expect(minute).toBe(13);
            expect(second).toBe(15);
            expect(miliSecond).toBe(800);
      });

      it('functional test with hour 3', () => {
            let { miliSecond, second, minute, hour, year, month, day } = toJalali('2020-10-29T05:03:35.462Z');
            expect(year).toBe(1399);
            expect(month).toBe(8);
            expect(day).toBe(8);
            expect(hour).toBe(5);
            expect(minute).toBe(3);
            expect(second).toBe(35);
            expect(miliSecond).toBe(462);
      });
});
