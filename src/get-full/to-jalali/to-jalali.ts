import { dateSplicer } from '../date-splicer/date-splicer';
import { inWinter } from './in-winter';
import { howManyDaysArePast } from './how-many-days-are-past';
import { springCalculation } from './spring-calculation';
import { winterCalculation } from './winter-calculation';


export function toJalali(date: string):outPut{
    let { year, month, day } = dateSplicer(date);
    let Days = howManyDaysArePast(year, month, day);
    if(inWinter(Days)){
        return winterCalculation(year,Days);
    }
    else{
        return springCalculation(year,Days);
    }
}


interface outPut{
    year:  number;
    month: number;
    day:   number
}