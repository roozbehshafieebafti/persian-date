import PersainDate from '../index';

let _date = new PersainDate();

describe('Persian Date Class Test', () => {
      test('has getDey method?', () => {
            expect('getDay' in _date).toBe(true);
      });

      test('has getMonth method?', () => {
            expect('getMonth' in _date).toBe(true);
      });

      test('has getYear method?', () => {
            expect('getYear' in _date).toBe(true);
      });

      test('has getWeek method?', () => {
            expect('getWeek' in _date).toBe(true);
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
});
