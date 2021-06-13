import './Header.scss';
import Logo from '../common/logo/Logo';

const Header = () => (
    <header className="header">
        <a href="/">
            <div className="header__logo">
                <Logo />
                <div className="header__name">
                    <span className="header__name-word">Smart</span>
                    <span className="header__name-word">Weather</span>
                </div>
            </div>
        </a>
        <input className="search" placeholder="Search" />
        <ul className="menu">
            <li className="menu__item"><a href="/">Settings</a></li>
            <li className="menu__item"><a href="/">Login</a></li>
        </ul>
    </header>
);

export default Header;