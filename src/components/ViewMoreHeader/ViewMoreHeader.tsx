import clsx from 'clsx';

import { ViewMoreButton } from '../../components';

import s from './ViewMoreHeader.module.css';

interface ViewMoreHeaderProps {
  className?: string;
  title: string;
  link: string;
}

const ViewMoreHeader = ({ title, link, className }: ViewMoreHeaderProps) => {
  return (
    <div className={clsx(s.container, className)}>
      <h3 className={s.title}>{title}</h3>
      <ViewMoreButton link={link} />
    </div>
  );
};

export default ViewMoreHeader;
