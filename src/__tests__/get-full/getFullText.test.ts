import { getFullText } from '../../get-full/getFullText';

describe('getNumeric of the group', () => {
    it('should exists', () => {
        expect(getFullText).toBeDefined();
    });

    it('function testing 1 ', () => {
        let result = getFullText(2020,2,1,2,33,2,3);
        expect(result).toBe('2020-02-01T02:33:02.003Z');
    });

    it('function testing 2 ', () => {
        let result = getFullText(1990,12,10,0,0,0,0);
        expect(result).toBe('1990-12-10T00:00:00.000Z');
    });

    it('function testing 3 ', () => {
        let result = getFullText(2000,1,30,0,45,5,300000);
        expect(result).toBe('2000-01-30T00:45:05.300Z');
    });

    it('function testing 4 ', () => {
        let result = getFullText(2000,1,30,0,45,5,30);
        expect(result).toBe('2000-01-30T00:45:05.030Z');
    });

    it('function testing 5 ', () => {
        let result = getFullText(2010,8,1,0,1,16,324567);
        expect(result).toBe('2010-08-01T00:01:16.324Z');
    });

    it('function testing 6 ', () => {
        let result = getFullText(1970,12,12,10,0,0,8);
        expect(result).toBe('1970-12-12T10:00:00.008Z');
    });

    it('function testing 7 ', () => {
        let result = getFullText(1999,2,31,0,0,0,0);
        expect(result).toBe('1999-02-31T00:00:00.000Z');
    });
});