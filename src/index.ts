import GetFull, {getFullOutPut} from './get-full/index';


class PersainDate {
      getDay() {}

      getMonth() {}

      getYear() {}

      getWeek() {}

      getNumeric() {}

      getFull(date: string, type: 'fa' | 'en'):getFullOutPut{
            return GetFull(date,type);
      }

      convert() {}
}

export default PersainDate;
