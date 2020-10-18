
export function springCalculation(gYear:number,days:number){

    let year : number = 0,
        month: number = 0, 
        day  : number = 0;
    let dayReduction:number = days - 79;

    // year calculation
    year = gYear - 621;

    // in summer and spring 
    if(dayReduction <= 186){
        
        let leftOver = (days - 79) % 31;
        if(leftOver === 0){
            month = Math.floor((days - 79) / 31) ;
            day   = 31
        }
        else{
            month = Math.floor((days - 79) / 31) + 1;
            day   = leftOver;
        }
    }
    // in fall
    else{
        let leftOver = (days - 79 - 186) % 30;
        if(leftOver === 0){
            month = Math.floor((days - 79 - 186) / 30)+6;
            day   = 30;            
        }
        else{
            month = Math.floor((days - 79 - 186) / 30) + 7;
            day   = leftOver; 
        }
    }

    return { year, month, day}
}