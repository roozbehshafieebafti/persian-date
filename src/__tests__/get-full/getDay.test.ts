import { getDay } from '../../get-full/getDay';

describe('getDay of the group', () => {
    it('should exists', () => {
        expect(getDay).toBeDefined();
    });

    it('functional test 1 ', () => {
        let result = getDay(2020 , 11, 5,0 ,0 ,0 ,0);
        expect(result).toBe(4);
    });

    it('functional test 2 ', () => {
        let result = getDay(2020 , 11, 5, 9 , 29 , 24 , 306);
        expect(result).toBe(4);
    });

    it('functional test 3 ', () => {
        let result = getDay(2020 , 11, 4, 2 , 29 , 24 , 306);
        expect(result).toBe(3);
    });

    it('functional test 4 ', () => {
        let result = getDay(2020 , 11, 3, 2 , 29 , 24 , 306);
        expect(result).toBe(2);
    });

    it('functional test 5 ', () => {
        let result = getDay(2020 , 11, 2, 2 , 29 , 24 , 306);
        expect(result).toBe(1);
    });

    it('functional test 6 ', () => {
        let result = getDay(2020 , 11, 1, 2 , 29 , 24 , 306);
        expect(result).toBe(0);
    });

    it('functional test 7 ', () => {
        let result = getDay(1992 , 11, 16, 2 , 29 , 24 , 306);
        expect(result).toBe(1);
    });

    it('functional test 8 ', () => {
        let result = getDay(1992 , 12, 25, 2 , 29 , 24 , 306);
        expect(result).toBe(5);
    });

    it('functional test 8 ', () => {
        let result = getDay(1992 , 7, 25, 2 , 29 , 24 , 306);
        expect(result).toBe(6);
    });

    it('functional test 9 ', () => {
        let result = getDay(2020 , 7, 22, 2 , 29 , 24 , 306);
        expect(result).toBe(3);
    });
});