# persian-date-converter
this library is used for converting Gregorian Date to Jalali Date and reverse.

## Installation
```bash
$ npm install persian-date-converter

$ yarn add persian-date-converter
```

## Quick Usage
```js
import Converter from 'persian-date-converter';

const _date = new Converter();
_date.convert('2020-11-8','fa')   // 1399/08/18
_date.convert('1399-8-18','en')   // 2020/11/08

```

## Date as an Input
In this library it is not important you separate year,month,day,... with which characters 
for example all of these patterns are acceptable:
```js
_date.convert('2020-11-8','fa')                 // 1399/08/18
_date.convert('2020 11 8','fa')                 // 1399/08/18
_date.convert('2020/11/8','fa')                 // 1399/08/18
_date.convert('2020.11.8','fa')                 // 1399/08/18
_date.convert('2020_11_8','fa')                 // 1399/08/18
_date.convert('2020+11+8','fa')                 // 1399/08/18
_date.convert('2020_11_8T12:14:40.324Z','fa')   // 1399/08/18
```
the only important thing is ORDER:
```
 'year - month - day - hour -  minute - second - millisecond'
```

## Custom Output
It is possible to custom output with 3th argument of convert function. for exxample:
```js
_date.convert('2020-11-8','fa','y-M')                 // 1399- آبان
_date.convert('2020-11-8','fa','y_m_d')                 // 1399_08_18
```


| Name          | Alias         |
| ------------- |:-------------:| 
| year          |  y            | 
| month         |  m            |  
| Month name    |  M            |  
| day           |  d            |  
| Day name      |  D            |  
| hour          |  h            |  
| minute        |  min          |  
| second        |  sec          |  
| millisecond   |  msec         |  

