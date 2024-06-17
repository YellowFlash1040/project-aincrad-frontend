import clsx from 'clsx';

import s from './SideBar.module.css';
import { BurgerMenuIcon } from '../../assets';

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className }: SideBarProps) => {
  return (
    <button className={clsx(className, s.sideBar)}>
      <BurgerMenuIcon width={28} />
    </button>
  );
};

export default SideBar;
