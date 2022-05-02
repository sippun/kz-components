const moment = require('moment');

export const getSpecificDate = (month, dayOfMonth, year) => {
  return moment(`${month}-${dayOfMonth}-${year}`, 'MM-DD-YYYY').toDate();
};

export const getDayOfMonth = (date) => moment(date).date();

export const getMonth = (date) => moment(date).month();

export const getYear = (date) => moment(date).year();

//Return a copy of the native Date object to prevent changes to moment
export const getToday = () => moment().toDate();

export const getNextMonth = (date) => moment(date).add(1, 'M').startOf("month").toDate();

export const getPrevMonth = (date) => moment(date).subtract(1, 'M').startOf("month").toDate();

export const getStartMonth = (date) => moment(date).startOf("month").toDate();

export const getReadableWeekday = (date) => moment(date).format('dddd');

export const getReadableMonth = (date) => moment(date).format('MMMM');

export const getMonthDayYear = (date) => moment(date).format('MM-DD-YYYY');

export const getYearMonthDay = (date) => moment(date).format('YYYY-MM-DD');

console.log(moment().toDate().toISOString());
