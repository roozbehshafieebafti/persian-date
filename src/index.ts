import GetFull, { getFullOutPut } from './get-full/index';
import Convert from './convert/index';

class PersainDate {
      /**
       *this function returns the day after convention
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @returns {number}
       * @memberof PersainDate
       */
      getDay(date: string, type: 'fa' | 'en'): number {
            let { day } =  GetFull(date, type);
            return day;
      }
      
      /**
       *this function returns the month after convention
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @returns {number}
       * @memberof PersainDate
       */
      getMonth(date: string, type: 'fa' | 'en'): number {
            let { month } =  GetFull(date, type);
            return month;
      }

      /**
       *this function returns year after convention
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @returns {number}
       * @memberof PersainDate
       */
      getYear(date: string, type: 'fa' | 'en'): number {
            let { year } =  GetFull(date, type);
            return year;
      }

      /**
       *this function returns day's name
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @returns {string}
       * @memberof PersainDate
       */
      getDayName(date: string, type: 'fa' | 'en'):string {
            let { dayName } =  GetFull(date, type);
            return dayName;
      }

      /**
       *this function returns month's name after convention
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @returns {string}
       * @memberof PersainDate
       */
      getMonthName(date: string, type: 'fa' | 'en'): string {
            let { monthName } =  GetFull(date, type);
            return monthName;
      }

      /**
       *this function returns Unix time - from 1970-01-01
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @returns {number}
       * @memberof PersainDate
       */
      getNumeric(date: string, type: 'fa' | 'en'):number {
            let { numeric } =  GetFull(date, type);
            return numeric;
      }

      /**
       * get the full information after coverting the date
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @returns {getFullOutPut}
       * @memberof PersainDate
       */
      getFull(date: string, type: 'fa' | 'en'): getFullOutPut {
            return GetFull(date, type);
      }

      /**
       *this function will convert date to gregorian and jalali with custom output format
       *
       * @param {string} date
       * @param {('fa' | 'en')} type
       * @param {string} [format] -> y-m-d T h:min:sec.msec
       * @returns
       * @memberof PersainDate
       */
      convert(date: string, type: 'fa' | 'en', format?: string) {
            return Convert(date,type,format);
      }
}

export default PersainDate;
