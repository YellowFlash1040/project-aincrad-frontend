import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { LogoIcon } from '../../assets';

import s from "./Logo.module.css"

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={clsx(s.link, className)} to={'/'}>
      <LogoIcon width={46} height={46} />
    </Link>
  );
};

export default Logo;
