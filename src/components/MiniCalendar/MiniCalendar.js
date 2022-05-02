import React, { useState } from "react";
import { getDatesInMonthDisplay } from './date-utils';
import {
  getDayOfMonth,
  getMonthDayYear,
  getMonth,
  getToday,
  getYear,
  getReadableMonth,
  getNextMonth,
  getPrevMonth,
  getStartMonth,
} from './moment-utils';
import { weekdaysAbbrev } from './date-consts';
import './MiniCalendar.css'

const MiniCalendar = ({selectDate, setSelectDate}) => {

  const weekDays = weekdaysAbbrev;
  const currentDate = getToday();
  const [viewDates, setViewDates] = useState({
    //day representing month/year to be shown
    day: getStartMonth(currentDate),
    dates: getDatesInMonthDisplay(getMonth(currentDate) + 1, getYear(currentDate)),
  });

  const changeDate = (e) => {
    setSelectDate(e.target.getAttribute('data-date'));
  };

  const changeMonthLeft = () => {
    let prevMonthDate = getPrevMonth(viewDates.day);
    setViewDates({
      day: prevMonthDate,
      dates: getDatesInMonthDisplay(getMonth(prevMonthDate) + 1, getYear(prevMonthDate))
    });
  }

  const changeMonthRight = () => {
    let nextMonthDate = getNextMonth(viewDates.day);
    setViewDates({
      day: nextMonthDate,
      dates: getDatesInMonthDisplay(getMonth(nextMonthDate) + 1, getYear(nextMonthDate))
    });
  }

  const monthDates = viewDates.dates.map((i, key) => {
    const current =
      getMonthDayYear(currentDate) === getMonthDayYear(i.date) ? 'current' : '';
    const select = 
      getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? 'select' : '';
    const active = 
      i.currentMonth ? 'active' : '';

    return (
      <div
        className={`date-icon ${current} ${select} ${active}`}
        data-date={i.date.toString()}
        key={key}
        onClick={changeDate}
      >
        {getDayOfMonth(i.date)}
      </div>
    );
  });
  

  return (
    <div className="mini-calendar-container">
      <div className="calendar-header">
        <div className="left-container">
          <div className="header-text">
            {getReadableMonth(viewDates.day)} {getYear(viewDates.day)}
          </div>
        </div>
        <div className="right-container">
          <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg" onClick={changeMonthLeft}>
            <path d="M7.70711 0.292893C8.09763 0.683418 8.09763 1.31658 7.70711 1.70711L3.41421 6H15C15.5523 6 16 6.44771 16 7C16 7.55228 15.5523 8 15 8H3.41421L7.70711 12.2929C8.09763 12.6834 8.09763 13.3166 7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071L0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893Z" />
          </svg>
          <svg width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg" onClick={changeMonthRight}>
            <path d="M8.29289 0.292893C8.68342 -0.0976311 9.31658 -0.0976311 9.70711 0.292893L15.7071 6.29289C15.8946 6.48043 16 6.73478 16 7C16 7.26522 15.8946 7.51957 15.7071 7.70711L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L12.5858 8L1 8C0.447715 8 0 7.55229 0 7C0 6.44772 0.447715 6 1 6L12.5858 6L8.29289 1.70711C7.90237 1.31658 7.90237 0.683417 8.29289 0.292893Z" />
          </svg>
        </div>
      </div>

      <div className = "weekday-indicator">
        {weekDays.map((day, i) => (
          <label key={i}> {day} </label>
        ))}
      </div>

      <div className = "date-indicator">
        {monthDates}
      </div>
    </div>
  )
};

export default MiniCalendar;