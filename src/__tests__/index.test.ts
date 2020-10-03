import PesrsianDate from '../index';
import PersainDate from '../index';

describe('Persian Date Class Test',()=>{
    test('existance test',()=>{
        expect(PesrsianDate).toBeDefined();
    });

    test('has getDey method?',()=>{
        let _date = new PersainDate();
        expect("getDay" in _date).toBe(true)
    })

    test('has getMonth method?',()=>{
        let _date = new PersainDate();
        expect("getMonth" in _date).toBe(true)
    })

    test('has getYear method?',()=>{
        let _date = new PersainDate();
        expect("getYear" in _date).toBe(true)
    })

    test('has getWeek method?',()=>{
        let _date = new PersainDate();
        expect("getWeek" in _date).toBe(true)
    })

    test('has getNumeric method?',()=>{
        let _date = new PersainDate();
        expect("getNumeric" in _date).toBe(true)
    })

    test('has getFull method?',()=>{
        let _date = new PersainDate();
        expect("getFull" in _date).toBe(true)
    })

    test('has convert method?',()=>{
        let _date = new PersainDate();
        expect("convert" in _date).toBe(true)
    })
})