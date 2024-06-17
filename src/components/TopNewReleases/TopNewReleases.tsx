import clsx from 'clsx';

import s from './TopNewReleases.module.css';

interface TopNewReleasesProps {
  className?: string;
}

const TopNewReleases = ({ className }: TopNewReleasesProps) => {
  // const imagesUrl =
  //   'https://fastly.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU';
  const imagesUrl =
    'https://fastly.picsum.photos/id/220/3872/2416.jpg?hmac=IpdtOEIfyokMoTZnxVYPTnmDjctAytLTcGi2-BPsv-M';

  return (
    <ul className={clsx(s.topNewReleasesList, className)}>
      <li className={s.topNewReleaseCard}>
        <img src={imagesUrl} alt="" width={'100%'} height={'100%'} />
      </li>
      <li className={s.topNewReleaseCard}>
        <img src={imagesUrl} alt="" width={'100%'} height={'100%'} />
      </li>
    </ul>
  );
};

export default TopNewReleases;
