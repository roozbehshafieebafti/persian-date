import { getFullText } from './getFullText';

export function getNumeric(...data: number[]):number{
    let [ year, month, day, hour, minute, second, milisecond ] = data;
    let standard:string = getFullText(year, month, day, hour, minute, second, milisecond);

    let numeric = new Date(standard).getTime();
    if(typeof numeric === "number" && !Number.isNaN(numeric)){
        return numeric;
    }
    else{
        return 0;
    }
}