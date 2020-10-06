export function isLeap(year:number):boolean{
    let condition1: boolean = (year%400 === 0) && (year%100 === 0);
    let condition2:boolean = (year%100 !== 0) && (year%4 === 0);

    if( condition1 || condition2){
        return true;
    }
    return false;
}