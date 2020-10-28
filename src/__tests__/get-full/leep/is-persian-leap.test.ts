import { isPersianLeap } from '../../../get-full/leap/is-persian-leap';

describe('isPersianLeap Group test', () => {
      it('should exist', () => {
            expect(isPersianLeap).toBeDefined();
      });

      it('functional tets 1', () => {
            expect(isPersianLeap(1391)).toBeTruthy();
      });
      it('functional tets 2', () => {
            expect(isPersianLeap(1403)).toBeTruthy();
      });
      it('functional tets 3', () => {
            expect(isPersianLeap(1399)).toBeTruthy();
      });
      it('functional tets 4', () => {
            expect(isPersianLeap(1395)).toBeTruthy();
      });
      it('functional tets 5', () => {
            expect(isPersianLeap(1408)).toBeTruthy();
      });

      it('functional tets 6', () => {
            expect(isPersianLeap(1397)).toBeFalsy();
      });
      it('functional tets 7', () => {
            expect(isPersianLeap(1371)).toBeFalsy();
      });
      it('functional tets 8', () => {
            expect(isPersianLeap(1373)).toBeFalsy();
      });
});
