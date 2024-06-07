import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import s from './Navigation.module.css';

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={clsx(s.navigation, className)}>
      <ul className={s.pagesList}>
        <li className={s.pageItem}>
          <NavLink className={s.pageLink} to={'/'}>
            Home
          </NavLink>
        </li>
        <li className={s.pageItem}>
          <NavLink className={s.pageLink} to={'/games'}>
            Games
          </NavLink>
        </li>
        <li className={s.pageItem}>
          <NavLink className={s.pageLink} to={'/community'}>
            Community
          </NavLink>
        </li>
        <li className={s.pageItem}>
          <NavLink className={s.pageLink} to={'/developers'}>
            Developers
          </NavLink>
        </li>
        <li className={s.pageItem}>
          <NavLink className={s.pageLink} to={'/about-us'}>
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
