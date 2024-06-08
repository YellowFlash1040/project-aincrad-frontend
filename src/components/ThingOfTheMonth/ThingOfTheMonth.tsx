import { Link } from 'react-router-dom';
import clsx from 'clsx';

import s from './ThingOfTheMonth.module.css';

interface ThingOfTheMonthProps {
  className?: string;
  cardName: string;
}

const ThingOfTheMonth = ({ cardName, className }: ThingOfTheMonthProps) => {
  return (
    <Link className={clsx(s.card, className)} to={'/'}>
      {/* <div className={clsx(s.card, className)}> */}
      <h3 className={s.title}>{cardName} of the month</h3>
      <img
        src="https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM"
        alt=""
        width={411}
        height={323}
      />
      {/* </div> */}
    </Link>
  );
};

export default ThingOfTheMonth;
