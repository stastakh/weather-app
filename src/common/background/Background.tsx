import './Background.scss';
import dayjs from 'dayjs';
import Clock from '../clock/Clock';
import { evening, darkEvening, day, night, preNight, morning } from './backround';
import { useState, useEffect } from 'react';

const Background = () => {
  const defineColor = () => {
    const currentHour: number = +dayjs().get('hour');
    switch(true) {
      case currentHour > 4 && currentHour < 10:
        return morning;
      case currentHour >= 10 && currentHour <= 16:
        return day;
      case currentHour > 16 && currentHour <= 18:
        return evening;
      case currentHour > 18 && currentHour <= 20:
        return darkEvening;
      case currentHour > 20 && currentHour < 22:
        return preNight;
      case currentHour >= 22 || currentHour <= 4:
        return night;
      default:
        return evening;
    }
  }

  const [backgroundColor, setBackgound] = useState(defineColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgound(defineColor());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background" style={backgroundColor}>
      <Clock />
    </div>
  )
};

export default Background;