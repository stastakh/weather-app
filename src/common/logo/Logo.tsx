import './Logo.scss';
import cloud from '../icons/cloud2.svg';
import sun from '../icons/sun.svg';

const logo = () => (
  <div className="logo">
    <img className="logo__icon logo__icon--cloud" src={cloud} alt="cloud" />
    <img className="logo__icon logo__icon--sun" src={sun} alt="sun" />
  </div>
);

export default logo;