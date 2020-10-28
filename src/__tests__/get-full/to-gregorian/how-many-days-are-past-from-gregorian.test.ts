import { howManyDaysArePastFromGregorian } from '../../../get-full/to-gregorian/how-many-days-are-past-from-gregorian';

describe('howManyDaysArePastFromGregorian of the group', () => {
      it('should exists', () => {
            expect(howManyDaysArePastFromGregorian).toBeDefined();
      });

      it('functionla test 1', () => {
            let result = howManyDaysArePastFromGregorian(1, 1399);
            expect(result).toBe(80);
      });
      it('functionla test 2', () => {
            let result = howManyDaysArePastFromGregorian(46, 1399);
            expect(result).toBe(125);
      });
      it('functionla test 3', () => {
            let result = howManyDaysArePastFromGregorian(83, 1399);
            expect(result).toBe(162);
      });
      it('functionla test 4', () => {
            let result = howManyDaysArePastFromGregorian(205, 1399);
            expect(result).toBe(284);
      });
      it('functionla test 5', () => {
            let result = howManyDaysArePastFromGregorian(242, 1399);
            expect(result).toBe(321);
      });
      it('functionla test 6', () => {
            let result = howManyDaysArePastFromGregorian(287, 1399);
            expect(result).toBe(366);
      });
      it('functionla test 8', () => {
            let result = howManyDaysArePastFromGregorian(288, 1399);
            expect(result).toBe(1);
      });
      it('functionla test 9', () => {
            let result = howManyDaysArePastFromGregorian(334, 1399);
            expect(result).toBe(47);
      });
      it('functionla test 10', () => {
            let result = howManyDaysArePastFromGregorian(366, 1399);
            expect(result).toBe(79);
      });

      it('functionla test 11', () => {
            let result = howManyDaysArePastFromGregorian(1, 1398);
            expect(result).toBe(80);
      });
      it('functionla test 12', () => {
            let result = howManyDaysArePastFromGregorian(25, 1398);
            expect(result).toBe(104);
      });
      it('functionla test 13', () => {
            let result = howManyDaysArePastFromGregorian(53, 1398);
            expect(result).toBe(132);
      });
      it('functionla test 14', () => {
            let result = howManyDaysArePastFromGregorian(170, 1398);
            expect(result).toBe(249);
      });
      it('functionla test 15', () => {
            let result = howManyDaysArePastFromGregorian(242, 1398);
            expect(result).toBe(321);
      });
      it('functionla test 16', () => {
            let result = howManyDaysArePastFromGregorian(286, 1398);
            expect(result).toBe(365);
      });
      it('functionla test 16', () => {
            let result = howManyDaysArePastFromGregorian(287, 1398);
            expect(result).toBe(1);
      });
});
