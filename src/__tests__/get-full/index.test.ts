import getFull from '../../get-full/index';

describe('test group of getFull', () => {
      it('should exist', () => {
            expect(getFull).toBeDefined();
      });

      it('functional test 1', () => {
            let { year, month, day, monthName } = getFull('1992/11/16', 'fa');
            expect(year).toBe(1371);
            expect(month).toBe(8);
            expect(day).toBe(26);
            expect(monthName).toBe("آبان")
      });

      it('functional test 2', () => {
            let { year, month, day, monthName } = getFull('2019/11/16', 'fa');
            expect(year).toBe(1398);
            expect(month).toBe(8);
            expect(day).toBe(25);
            expect(monthName).toBe("آبان")
      });

      it('functional test 3', () => {
            let { year, month, day, monthName } = getFull('2019/11/16', 'fa');
            expect(year).toBe(1398);
            expect(month).toBe(8);
            expect(day).toBe(25);
            expect(monthName).toBe("آبان")
      });

      it('functional test 4', () => {
            let { year, month, day, monthName } = getFull('2019/11/16', 'fa');
            expect(year).toBe(1398);
            expect(month).toBe(8);
            expect(day).toBe(25);
            expect(monthName).toBe("آبان")
      });

      it('functional test 5', () => {
            let { year, month, day, monthName } = getFull('1994/04/24', 'fa');
            expect(year).toBe(1373);
            expect(month).toBe(2);
            expect(day).toBe(4);
            expect(monthName).toBe("اُردیبهشت")
      });

      it('functional test 6', () => {
            let { year, month, day, monthName } = getFull('1996/06/16', 'fa');
            expect(year).toBe(1375);
            expect(month).toBe(3);
            expect(day).toBe(27);
            expect(monthName).toBe("خرداد")
      });

      it('functional test 7', () => {
            let { year, month, day, monthName } = getFull('2019/06/16', 'fa');
            expect(year).toBe(1398);
            expect(month).toBe(3);
            expect(day).toBe(26);
            expect(monthName).toBe("خرداد")
      });



//============================================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                                            
//   ####    #####    #####   ####     #####   #####    ##    ###    ##     ##                                                                                                                                                                                                                                                              
//  ##       ##  ##   ##     ##       ##   ##  ##  ##   ##   ## ##   ####   ##                                                                                                                                                                                                                                                              
//  ##  ###  #####    #####  ##  ###  ##   ##  #####    ##  ##   ##  ##  ## ##                                                                                                                                                                                                                                                              
//  ##   ##  ##  ##   ##     ##   ##  ##   ##  ##  ##   ##  #######  ##    ###                                                                                                                                                                                                                                                              
//   ####    ##   ##  #####   ####     #####   ##   ##  ##  ##   ##  ##     ##                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                                                            
//============================================================================================================================================================================================================================================================================================================================================



      it('functional test 11', () => {
            let { year, month, day, hour, minute, second, millisecond ,monthName} = getFull('1371/08/26T20:30:0.000Z', 'en');
            expect(year).toBe(1992);
            expect(month).toBe(11);
            expect(day).toBe(16);

            expect(hour).toBe(20);
            expect(minute).toBe(30);
            expect(second).toBe(0);
            expect(millisecond).toBe(0);
            expect(monthName).toBe("November");

      });

      it('functional test 12', () => {
            let { year, month, day, monthName } = getFull('1398-8-25', 'en');
            expect(year).toBe(2019);
            expect(month).toBe(11);
            expect(day).toBe(16);
            expect(monthName).toBe("November");
      });

      it('functional test 13', () => {
            let { year, month, day, monthName } = getFull('1398 8 25', 'en');
            expect(year).toBe(2019);
            expect(month).toBe(11);
            expect(day).toBe(16);
            expect(monthName).toBe("November");
      });

      it('functional test 14', () => {
            let { year, month, day, monthName } = getFull('1398-8-25', 'en');
            expect(year).toBe(2019);
            expect(month).toBe(11);
            expect(day).toBe(16);
            expect(monthName).toBe("November");
      });

      it('functional test 15', () => {
            let { year, month, day, hour, minute, second, millisecond, monthName } = getFull('1373_2_4T1994/04/24', 'en');
            expect(year).toBe(1994);
            expect(month).toBe(4);
            expect(day).toBe(24);

            expect(hour).toBe(0);
            expect(minute).toBe(4);
            expect(second).toBe(24);
            expect(millisecond).toBe(0);
            expect(monthName).toBe("April");
      });

      it('functional test 16', () => {
            let { year, month, day, monthName } = getFull('1375 3 27', 'en');
            expect(year).toBe(1996);
            expect(month).toBe(6);
            expect(day).toBe(16);
            expect(monthName).toBe("June");
      });

      it('functional test 17', () => {
            let { year, month, day, monthName } = getFull('1398\\3\\26', 'en');
            expect(year).toBe(2019);
            expect(month).toBe(6);
            expect(day).toBe(16);
            expect(monthName).toBe("June");
      });



      // it('functional test 18', () => {
      //       let { year, month, day,  hour, minute, second, millisecond } = getFull('1398\\3\\26', 'fr');
      //       expect(year).toBe(0);
      //       expect(month).toBe(0);
      //       expect(day).toBe(0);

      //       expect(hour).toBe(0);
      //       expect(minute).toBe(0);
      //       expect(second).toBe(0);
      //       expect(millisecond).toBe(0);
      // });



});
