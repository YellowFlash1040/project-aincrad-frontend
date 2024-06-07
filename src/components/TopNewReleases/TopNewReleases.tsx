import clsx from 'clsx';

import s from './TopNewReleases.module.css';

interface TopNewReleasesProps {
  className?: string;
}

const TopNewReleases = ({ className }: TopNewReleasesProps) => {
  const imagesUrl =
    'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4';

  return (
    <ul className={clsx(s.topNewReleasesList, className)}>
      <li className={s.topNewReleaseCard}>
        <img src={imagesUrl} alt="" width={543} height={309} />
      </li>
      <li className={s.topNewReleaseCard}>
        <img src={imagesUrl} alt="" width={543} height={309} />
      </li>
    </ul>
  );
};

export default TopNewReleases;
