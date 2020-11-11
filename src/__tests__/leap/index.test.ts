import { leap } from '../../leap/index';

describe('leap of the group', () => {
    it('should exists', () => {
        expect(leap).toBeDefined();
    });

    it('functional test 1', () => {
        let res = leap(2000,'en');
        expect(res).toBeTruthy()
    });

    it('functional test 2', () => {
        let res = leap(2016,'en');
        expect(res).toBeTruthy()
    });

    it('functional test 2', () => {
        let res = leap(2020,'en');
        expect(res).toBeTruthy()
    });

    it('functional test 3', () => {
        let res = leap(1403,'fa');
        expect(res).toBeTruthy()
    });

    it('functional test 4', () => {
        let res = leap(1399,'fa');
        expect(res).toBeTruthy()
    });

    it('functional test 5', () => {
        let res = leap(1395,'fa');
        expect(res).toBeTruthy()
    });
});