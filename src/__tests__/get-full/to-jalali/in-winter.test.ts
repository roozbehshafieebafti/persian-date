import { inWinter } from '../../../get-full/to-jalali/in-winter';

test('in winter test',()=>{
    expect(inWinter(79)).toBeTruthy()
    expect(inWinter(20)).toBeTruthy()
    expect(inWinter(58)).toBeTruthy()
    expect(inWinter(80)).toBeFalsy()
    expect(inWinter(130)).toBeFalsy()
    expect(inWinter(330)).toBeFalsy()
})