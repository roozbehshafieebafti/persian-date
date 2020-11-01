import GetFull from '../get-full/index';

function convert(date: string, type: 'fa' | 'en',format?: string): string{
    if(format === undefined || format === null || !format){
        format = 'y/m/d';
    }
    let { year, month, day, hour, minute, second, millisecond, monthName } = GetFull(date,type);

    let YEAR:string   = String(year);
    let MONTH:string  = month  > 9 ? String(month)  : "0"+String(month);
    let DAY:string    = day    > 9 ? String(day)    : "0"+String(day);
    let HOUR:string   = hour   > 9 ? String(hour)   : "0"+String(hour);
    let MINUTE:string = minute > 9 ? String(minute) : "0"+String(minute);
    let SECOND:string = second > 9 ? String(second) : "0"+String(second);
    let Milisecond:string = String(millisecond).length > 3 ? String(millisecond).slice(0,3) : String(millisecond);
    let MILISECOND:string = Milisecond.length === 3 ? Milisecond : 
                                Milisecond.length === 2 ? "0"+Milisecond :
                                    Milisecond.length === 1 ? "00"+Milisecond : "000";
    
    let result:string;

    result = format.replace(/min/,MINUTE);
    result = result.replace(/sec/,SECOND);
    result = result.replace(/msec/,MILISECOND);
    result = result.replace(/[yY]/,YEAR);
    result = result.replace(/[m]/,MONTH);
    result = result.replace(/[M]/,monthName);
    result = result.replace(/[dD]/,DAY);
    result = result.replace(/[hH]/,HOUR);

    return result;
}


export default convert;