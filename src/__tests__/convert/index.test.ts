import convert from '../../convert';

describe('convert of the group', () => {
    it('should exists', () => {
        expect(convert).toBeDefined();
    });

    it('functional test 1', () => {
        let result = convert('1992/11/16T20:30','fa','y-m-d h:min:sec.msec');
        expect(result).toBe('1371-08-26 20:30:00.000');
    });

    it('functional test 2', () => {
        let result = convert('1992/11/16T20:30','fa','y-m-d h:min:sec.msec');
        expect(result).toBe('1371-08-26 20:30:00.000');
    });

    it('functional test 3', () => {
        let result = convert('1992/11/16T20:30','fa');
        expect(result).toBe('1371/08/26');
    });

    it('functional test 4', () => {
        let result = convert('2020 11 1 12:56:00','fa','y-m-dTh:min:sec.msecZ');
        expect(result).toBe('1399-08-11T12:56:00.000Z');
    });

    it('functional test 5', () => {
        let result = convert('1399-08-11T12:56:00.000Z','en','y-m-dTh:min:sec.msecZ');
        expect(result).toBe('2020-11-01T12:56:00.000Z');
    });

    it('functional test 6', () => {
        let result = convert('1399-08-11T12:56:00.000Z','en','M');
        expect(result).toBe('November');
    });

    it('functional test 7', () => {
        let result = convert('2020 11 1 12:56:00','fa','M');
        expect(result).toBe('آبان');
    });

    it('functional test 8', () => {
        let result = convert('2020 11 1 12:56:00','fa','y-M');
        expect(result).toBe('1399-آبان');
    });

    it('functional test 9', () => {
        let result = convert('2020 11 1 12:56:00','fa','y-M-d');
        expect(result).toBe('1399-آبان-11');
    });

    it('functional test 10', () => {
        let result = convert('2020 11 1 1:5:20','fa','h:min:sec');
        expect(result).toBe('01:05:20');
    });    

    it('functional test 11', () => {
        let result = convert('2020 11 1 1:5:00.3216','fa','h:min:sec msec');
        expect(result).toBe('01:05:00 000');
    });

    it('functional test 12', () => {
        let result = convert('2020 11 1 1:5:00.111','fa','h:min:sec msec');
        expect(result).toBe('01:05:00 111');
    });

    it('functional test 13', () => {
        let result = convert('2020 11 1 1:5:00.55','fa','h:min:sec msec');
        expect(result).toBe('01:05:00 055');
    });

    it('functional test 14', () => {
        let result = convert('2020 11 1 1:5:00.55','fa','h:min:sec msec');
        expect(result).toBe('01:05:00 055');
    });

    it('functional test 15', () => {
        let result = convert('2020 11 8','fa','D d-M-y');
        expect(result).toBe('یکشنبه 18-آبان-1399');
    });
});