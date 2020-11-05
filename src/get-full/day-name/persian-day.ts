export function persianDay(day:number):string{
    let name = "";
    switch (day) {
        case 0:
            name="یکشنبه";
            break;
        case 1:
            name="دوشنبه";            
            break;
        case 2:            
            name="سه‌شنبه";
            break;
        case 3:            
            name="چهارشنبه";
            break;
        case 4:            
            name="پنج‌شنبه";
            break;
        case 5:            
            name="جمعه";
            break;
        case 6:            
            name="شنبه";
            break;        
        default:
            break;
    }
    return name;
}