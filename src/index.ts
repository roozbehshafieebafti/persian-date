import GetFull, { getFullOutPut } from './get-full/index';

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

      getWeek() {}

      getNumeric() {}

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

      convert() {}
}

export default PersainDate;
