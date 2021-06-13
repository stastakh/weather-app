import './Clock.scss';
import dayjs from 'dayjs';

import { useState, useEffect } from 'react';

import sunrise from '../icons/sunrise.svg';
import sun from '../icons/big-sun.svg';
import sunset from '../icons/sunset.svg';
import moon from '../icons/moon.svg';

const Clock = () => {

  const getCurrentTime = () => {
    const date = dayjs();
    const hour = +date.format('HH');
    const minutes = date.format('mm');
    return {
      time: `${date.format('HH')}:${minutes}`,
      date: `${date.format('DD')} ${date.format('MMM')} ${date.format('YYYY')}`,
      dayOfWeek: date.format('dddd'),
      dayPart: hour >= 12 ? 'pm' : 'am',
      icon: 
        hour >= 12 && hour <= 16 ? sun : 
        hour > 4 && hour < 22 ? 
        sunset : hour >= 22 || hour <= 4 ? 
        moon : sunrise
    };
  };

  const [currentTime, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer); 
  });
  
  return (
    <div className="clock">
      <span className="clock__date">{currentTime.date}</span>
      <span className="clock__separator"></span>
      <span className="clock__week-day">{currentTime.dayOfWeek}</span>
      <div className="time">
        <span className="time__numbers">
          {currentTime.time}
          <div className="time__wrapper">
            <span className="time__day-part">{currentTime.dayPart}</span>
            <img className="time__period" src={currentTime.icon} alt="period" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Clock;