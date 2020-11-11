import { isLeap } from '../get-full/leap/is-leap';
import { isPersianLeap } from '../get-full/leap/is-persian-leap';

export function leap(year:number,type: 'fa'|'en'):Boolean{
    if(type === 'fa'){
        return isPersianLeap(year)
    }
    else{
        return isLeap(year);
    }    
}