import { getFullText } from './getFullText';

export function getDay(...data: number[]):number{
    let [ year, month, day, hour, minute, second, milisecond ] = data;
    let standard:string = getFullText(year, month, day, hour, minute, second, milisecond);
    let dayNumber = new Date(standard).getDay();
    
    return dayNumber;
}