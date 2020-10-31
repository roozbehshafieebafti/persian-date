import { getNumeric } from '../../get-full/getNumeric';

describe('getNumeric of the group', () => {
    it('should exists', () => {
        expect(getNumeric).toBeDefined();
    });

    it('functional test 1 ', () => {
        let result = getNumeric(2020,2,1,2,33,2,3)
        expect(result).toBe(1580524382003);
    });

    it('functional test 2 ', () => {
        let result = getNumeric(1990,12,10,0,0,0,0)
        expect(result).toBe(660787200000);
    });

    it('functional test 3 ', () => {
        let result = getNumeric(1970,1,1,0,0,0,0)
        expect(result).toBe(0);
    });

    it('functional test 4 ', () => {
        let result = getNumeric(2000,1,30,0,45,5,300000)
        expect(result).toBe(949193105300);
    });

    it('functional test 5 ', () => {
        let result = getNumeric(2010,8,1,0,1,16,324567)
        expect(result).toBe(1280620876324);
    });

    it('functional test 6 ', () => {
        let result = getNumeric(2010,0,1,0,1,16,324567)
        expect(result).toBe(0);
    });
});