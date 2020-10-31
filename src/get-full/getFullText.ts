export function getFullText(...data: number[]){
    let [ year, month, day, hour, minute, second, milisecond ] = data;

    let YEAR:string   = String(year);
    let MONTH:string  = month>9  ? String(month)  : "0"+String(month);
    let DAY:string    = day>9    ? String(day)    : "0"+String(day);
    let HOUR:string   = hour> 9  ? String(hour)   : "0"+String(hour);
    let MINUTE:string = minute>9 ? String(minute) : "0"+String(minute);
    let SECOND:string = second>9 ? String(second) : "0"+String(second);

    let Milisecond:string = String(milisecond).length > 3 ? String(milisecond).slice(0,3) : String(milisecond);
    let MILISECOND:string = Milisecond.length === 3 ? Milisecond : 
                                Milisecond.length === 2 ? "0"+Milisecond :
                                    Milisecond.length === 1 ? "00"+Milisecond : "000";

    return YEAR+'-'+MONTH+'-'+DAY+'T'+HOUR+':'+MINUTE+':'+SECOND+'.'+MILISECOND+'Z';

}