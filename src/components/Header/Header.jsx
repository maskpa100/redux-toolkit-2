import s from './Header.module.css';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={s.header}>
        <div className={s.row}>
            <div>
                <a href="/">
                    <img src="/img/logo.png" alt=""/>
                </a>
            </div>
            <ul className={s.list}>
                <li>
                    <NavLink to="/search" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Поиск</NavLink>
                </li>
            </ul>
        </div>
    </header>  
  );
}

export default Header;