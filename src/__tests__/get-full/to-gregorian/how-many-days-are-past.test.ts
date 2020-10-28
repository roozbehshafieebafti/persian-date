import { howManyDaysArePast } from '../../../get-full/to-gregorian/how-many-days-are-past';

describe('howManyDaysArePast of the group', () => {
      it('should exist', () => {
            expect(howManyDaysArePast).toBeDefined();
      });

      it('functional test 1', () => {
            let result = howManyDaysArePast(8, 26);
            expect(result).toBe(242);
      });

      it('functional test 2', () => {
            let result = howManyDaysArePast(2, 4);
            expect(result).toBe(35);
      });

      it('functional test 3', () => {
            let result = howManyDaysArePast(7, 19);
            expect(result).toBe(205);
      });

      it('functional test 4', () => {
            let result = howManyDaysArePast(11, 28);
            expect(result).toBe(334);
      });

      it('functional test 5', () => {
            let result = howManyDaysArePast(12, 30);
            expect(result).toBe(366);
      });
});
