import clsx from 'clsx';
import { /* useEffect,  */ useState } from 'react';

// import api from '../../api';
import { UpcomingGame } from '../../types';
import { DataLoader } from '../../components';
import { topNewRealeses } from '../../constants';

import s from './TopNewReleases.module.css';

interface TopNewReleasesProps {
  className?: string;
}

const TopNewReleases = ({ className }: TopNewReleasesProps) => {
  const imageUrl =
    'https://fastly.picsum.photos/id/220/3872/2416.jpg?hmac=IpdtOEIfyokMoTZnxVYPTnmDjctAytLTcGi2-BPsv-M';

  /* Real data - will uncomment and implement later */
  // const [games, setGames] = useState<UpcomingGame[]>([]);

  // useEffect(() => {
  //   const fetchGames = async () => {
  //     const result: UpcomingGame[] = await api.games.getTopNewReleases();
  //     setGames(result);
  //   };

  //   fetchGames();
  // }, []);

  /* Fake data - temporary solution */
  const [games] = useState<UpcomingGame[]>(topNewRealeses);

  return (
    (games.length > 0 && (
      <ul className={clsx(s.topNewReleasesList, className)}>
        {games.map((game) => (
          <li key={game.name} className={s.topNewReleaseCard}>
            <a href={game.background_image || imageUrl} target="_blank">
              <img
                src={game.background_image || imageUrl}
                alt={game.name}
                width={'100%'}
                height={'100%'}
              />
              <p className={s.gameName}>{game.name}</p>
            </a>
          </li>
        ))}
      </ul>
    )) || (
      <div className={s.dataPlaceHolder}>
        <DataLoader className={s.loader} />
      </div>
    )
  );
};

export default TopNewReleases;
