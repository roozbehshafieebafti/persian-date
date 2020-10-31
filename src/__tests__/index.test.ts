import PersainDate from '../index';

let _date = new PersainDate();

describe('Persian Date Class Test', () => {
//=================================================================================================================================================================================================================================================================================================================================================================================================
//
//  ###    ###  #####  ######  ##   ##   #####   ####          #####  ##    ##  ##   ####  ######    ###    ##     ##   ####  #####
//  ## #  # ##  ##       ##    ##   ##  ##   ##  ##  ##        ##      ##  ##   ##  ##       ##     ## ##   ####   ##  ##     ##
//  ##  ##  ##  #####    ##    #######  ##   ##  ##  ##        #####    ####    ##   ###     ##    ##   ##  ##  ## ##  ##     #####
//  ##      ##  ##       ##    ##   ##  ##   ##  ##  ##        ##      ##  ##   ##     ##    ##    #######  ##    ###  ##     ##
//  ##      ##  #####    ##    ##   ##   #####   ####          #####  ##    ##  ##  ####     ##    ##   ##  ##     ##   ####  #####
//
//=================================================================================================================================================================================================================================================================================================================================================================================================

      test('has getDey method?', () => {
            expect('getDay' in _date).toBe(true);
      });

      test('has getMonth method?', () => {
            expect('getMonth' in _date).toBe(true);
      });

      test('has getYear method?', () => {
            expect('getYear' in _date).toBe(true);
      });

      test('has getDayName method?', () => {
            expect('getDayName' in _date).toBe(true);
      });

      test('has getMonthName method?', () => {
            expect('getMonthName' in _date).toBe(true);
      });

      test('has getNumeric method?', () => {
            expect('getNumeric' in _date).toBe(true);
      });

      test('has getFull method?', () => {
            expect('getFull' in _date).toBe(true);
      });

      test('has convert method?', () => {
            expect('convert' in _date).toBe(true);
      });      

//============================================================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                                                            
//   ####    #####  ######  #####  ##   ##  ##      ##            ######  #####   ####  ######                                                                                                                                                                                                                                                              
//  ##       ##       ##    ##     ##   ##  ##      ##              ##    ##     ##       ##                                                                                                                                                                                                                                                                
//  ##  ###  #####    ##    #####  ##   ##  ##      ##              ##    #####   ###     ##                                                                                                                                                                                                                                                                
//  ##   ##  ##       ##    ##     ##   ##  ##      ##              ##    ##        ##    ##                                                                                                                                                                                                                                                                
//   ####    #####    ##    ##      #####   ######  ######          ##    #####  ####     ##                                                                                                                                                                                                                                                                
//                                                                                                                                                                                                                                                                                                                                                            
//============================================================================================================================================================================================================================================================================================================================================================


      test('functional test get full 1', () => {
            let {year,month,day,hour,minute,second,millisecond}= _date.getFull('1373-02-04T09:39:12.333Z','en');
            expect(year).toBe(1994);
            expect(month).toBe(4);
            expect(day).toBe(24);

            expect(hour).toBe(9);
            expect(minute).toBe(39);
            expect(second).toBe(12);
            expect(millisecond).toBe(333);
      });

      test('functional test get full 2', () => {
            let {year,month,day,hour,minute,second,millisecond}= _date.getFull('1964-02-17T09:39:12.333Z','fa');
            expect(year).toBe(1342);
            expect(month).toBe(11);
            expect(day).toBe(28);

            expect(hour).toBe(9);
            expect(minute).toBe(39);
            expect(second).toBe(12);
            expect(millisecond).toBe(333);
      });


//=========================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                         
//   ####    #####  ######        ####      ###    ##    ##                                                                                                                                                                                                                                                              
//  ##       ##       ##          ##  ##   ## ##    ##  ##                                                                                                                                                                                                                                                               
//  ##  ###  #####    ##          ##  ##  ##   ##    ####                                                                                                                                                                                                                                                                
//  ##   ##  ##       ##          ##  ##  #######     ##                                                                                                                                                                                                                                                                 
//   ####    #####    ##          ####    ##   ##     ##                                                                                                                                                                                                                                                                 
//                                                                                                                                                                                                                                                                                                                         
//=========================================================================================================================================================================================================================================================================================================================

      test('functional test get Day 1', () => {
            let day= _date.getDay('2020-10-29T17:59:0.000Z','fa');
            expect(day).toBe(8);
      });

      test('functional test get Day 2', () => {
            let day= _date.getDay('1399_08_08T17:59:0.000Z','en');
            expect(day).toBe(29);
      });


//===============================================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                                               
//   ####    #####  ######        ###    ###   #####   ##     ##  ######  ##   ##                                                                                                                                                                                                                                                              
//  ##       ##       ##          ## #  # ##  ##   ##  ####   ##    ##    ##   ##                                                                                                                                                                                                                                                              
//  ##  ###  #####    ##          ##  ##  ##  ##   ##  ##  ## ##    ##    #######                                                                                                                                                                                                                                                              
//  ##   ##  ##       ##          ##      ##  ##   ##  ##    ###    ##    ##   ##                                                                                                                                                                                                                                                              
//   ####    #####    ##          ##      ##   #####   ##     ##    ##    ##   ##                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                                                               
//===============================================================================================================================================================================================================================================================================================================================================

      
      test('functional test get month 1', () => {
            let month= _date.getMonth('2020-10-29T17:59:0.000Z','fa');
            expect(month).toBe(8);
      });

      test('functional test get month 2', () => {
            let month= _date.getMonth('1399_08_08T17:59:0.000Z','en');
            expect(month).toBe(10);
      });

//=================================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                                 
//   ####    #####  ######        ##    ##  #####    ###    #####                                                                                                                                                                                                                                                                
//  ##       ##       ##           ##  ##   ##      ## ##   ##  ##                                                                                                                                                                                                                                                               
//  ##  ###  #####    ##            ####    #####  ##   ##  #####                                                                                                                                                                                                                                                                
//  ##   ##  ##       ##             ##     ##     #######  ##  ##                                                                                                                                                                                                                                                               
//   ####    #####    ##             ##     #####  ##   ##  ##   ##                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                                                 
//=================================================================================================================================================================================================================================================================================================================================
      
      test('functional test get year 1', () => {
            let year= _date.getYear('2020-10-29T17:59:0.000Z','fa');
            expect(year).toBe(1399);
      });

      test('functional test get year 2', () => {
            let year= _date.getYear('1399_08_08T17:59:0.000Z','en');
            expect(year).toBe(2020);
      });

//============================================================================================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                                                                                            
//   ####    #####  ######        ###    ###   #####   ##     ##  ######  ##   ##        ##     ##    ###    ###    ###  #####                                                                                                                                                                                                                                                              
//  ##       ##       ##          ## #  # ##  ##   ##  ####   ##    ##    ##   ##        ####   ##   ## ##   ## #  # ##  ##                                                                                                                                                                                                                                                                 
//  ##  ###  #####    ##          ##  ##  ##  ##   ##  ##  ## ##    ##    #######        ##  ## ##  ##   ##  ##  ##  ##  #####                                                                                                                                                                                                                                                              
//  ##   ##  ##       ##          ##      ##  ##   ##  ##    ###    ##    ##   ##        ##    ###  #######  ##      ##  ##                                                                                                                                                                                                                                                                 
//   ####    #####    ##          ##      ##   #####   ##     ##    ##    ##   ##        ##     ##  ##   ##  ##      ##  #####                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                                                                                                            
//============================================================================================================================================================================================================================================================================================================================================================================================

      test('functional test get month name 1', () => {
            let month= _date.getMonthName('2020-10-29T17:59:0.000Z','fa');
            expect(month).toBe("آبان");
      });

      test('functional test get year 2', () => {
            let month= _date.getMonthName('1399_08_08T17:59:0.000Z','en');
            expect(month).toBe("October");
      });

//=========================================================================================================================================================================================================================================================================================================================================================
//                                                                                                                                                                                                                                                                                                                                                         
//   ####    #####  ######        ##     ##  ##   ##  ###    ###  #####  #####    ##   ####                                                                                                                                                                                                                                                              
//  ##       ##       ##          ####   ##  ##   ##  ## #  # ##  ##     ##  ##   ##  ##                                                                                                                                                                                                                                                                 
//  ##  ###  #####    ##          ##  ## ##  ##   ##  ##  ##  ##  #####  #####    ##  ##                                                                                                                                                                                                                                                                 
//  ##   ##  ##       ##          ##    ###  ##   ##  ##      ##  ##     ##  ##   ##  ##                                                                                                                                                                                                                                                                 
//   ####    #####    ##          ##     ##   #####   ##      ##  #####  ##   ##  ##   ####                                                                                                                                                                                                                                                              
//                                                                                                                                                                                                                                                                                                                                                         
//=========================================================================================================================================================================================================================================================================================================================================================

      test('functional test get numeric name 1', () => {
            let numeric= _date.getNumeric('2020-10-29T17:59:0.000Z','fa');
            expect(numeric).toBe(1603994340000);
      });

      test('functional test get numeric 2', () => {
            let numeric= _date.getNumeric('1399_08_08T17:59:0.000Z','en');
            expect(numeric).toBe(1603994340000);
      });
});
