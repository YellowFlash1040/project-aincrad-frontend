import clsx from 'clsx';

import ThingOfTheMonth from '../ThingOfTheMonth/ThingOfTheMonth';

import s from './ThingsOfTheMonth.module.css';

interface ThingsOfTheMonthProps {
  className?: string;
}

const SomethingOfTheMonth = ({ className }: ThingsOfTheMonthProps) => {
  return (
    <ul className={clsx(s.list, className)}>
      <li>
        <ThingOfTheMonth cardName="Game" />
      </li>
      <li>
        <ThingOfTheMonth cardName="Guide" />
      </li>
      <li>
        <ThingOfTheMonth cardName="Guidemaiker" />
      </li>
    </ul>
  );
};

export default SomethingOfTheMonth;
