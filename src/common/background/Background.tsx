import './Background.scss';
import dayjs from 'dayjs';
import Clock from '../clock/Clock';
import { evening, darkEvening, day, night, preNight, morning } from './backround';
import { useState, useEffect } from 'react';

const Background = () => {
  const defineColor = () => {
    const currentHour: number = +dayjs().get('hour');
    const background = {light: 'https://ufsa.com.ua/wp-content/uploads/2014/12/sun.png', color: day, position: 'flex-start', size: {width: '400px', height: '358px'}};
    switch(true) {
      case currentHour > 4 && currentHour < 10:
        background.light = 'https://pngimg.com/uploads/sun/sun_PNG13434.png';
        background.position = 'flex-end';
        background.color = morning;
        return background;
      case currentHour >= 10 && currentHour <= 16:
        return background;
      case currentHour > 16 && currentHour <= 18:
        background.light = 'https://pngimg.com/uploads/sun/sun_PNG13434.png';
        background.color = evening;
        return background;
      case currentHour > 18 && currentHour <= 20:
        background.light = 'https://www.seekpng.com/png/full/392-3921447_half-moon-png-transparent-drawing.png';
        background.color = darkEvening;
        background.size = {width: '150px', height: '150px'};
        return background;
      case currentHour > 20 && currentHour < 22:
        background.light = 'https://www.seekpng.com/png/full/392-3921447_half-moon-png-transparent-drawing.png';
        background.color = preNight;
        background.size = {width: '150px', height: '150px'};
        return background;
      case currentHour >= 22 || currentHour <= 4:
        background.light = 'https://www.seekpng.com/png/full/392-3921447_half-moon-png-transparent-drawing.png';
        background.color = night;
        background.size = {width: '150px', height: '150px'};
        return background;
      default:
        return background;
    }
  }

  const [background, setBackgound] = useState(defineColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgound(defineColor());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background" style={background.color}>
      <Clock />
      <div className="background__light" style={{alignItems:background.position}}>
        <img className="lighter" style={{width:background.size.width, height:background.size.height}} src={background.light} alt="sun" />
      </div>
    </div>
  )
};

export default Background;