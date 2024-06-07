import { Link } from 'react-router-dom';
import clsx from 'clsx';

import s from './ViewMoreButton.module.css';

interface ViewMoreButtonProps {
  className?: string;
  link: string;
}

const ViewMoreButton = ({ link, className }: ViewMoreButtonProps) => {
  return (
    <Link className={clsx(s.viewMoreButton, className)} to={link}>
      View more
    </Link>
  );
};

export default ViewMoreButton;
