import { leapYaer, ordinayYear } from './cumulative-day-of-year';
import { isLeap } from '../leap/is-leap';

export function howManyDaysArePast(year:number, month:number, day:number): number{
    if(isLeap(year)){
        return leapYaer[(month-1)] + day;
    }
    else{
        return ordinayYear[(month-1)] + day;
    }
}