import { ordinayYear, leapYaer } from '../../../get-full/to-jalali/cumulative-day-of-year';

describe('test cumulative part', () => {
      it('should exist', () => {
            expect(ordinayYear).toBeDefined();
            expect(leapYaer).toBeDefined();
      });
});
