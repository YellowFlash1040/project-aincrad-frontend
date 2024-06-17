import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { /* getUpcomingGamesThunk, */ selectUpcomingGames } from '../../redux';
import { DataLoader } from '../../components';

import s from './GamesSchedule.module.css';

const GamesSchedule = () => {
  const games = useAppSelector(selectUpcomingGames);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getUpcomingGamesThunk());
  }, [dispatch]);

  const imageUrl =
    'https://fastly.picsum.photos/id/866/140/180.jpg?hmac=MsCB-9ispG9gd4CNxR9h0iYD3LNq1fEm0hp7YciOSHY';

  return (
    (games.length > 0 && (
      <ul className={s.gamesList}>
        {games.map((game) => (
          <li key={game.background_image} className={s.gameCard}>
            <img
              src={game.background_image || imageUrl}
              alt={game.name}
              width={140}
              height={180}
            />
            <div className={s.releaseDate}>
              <p className={s.dayOfTheMonth}>{game.released.split('-')[2]}</p>
              <p>{new Date(game.released).toLocaleString('en-US', { month: 'short' })}</p>
            </div>
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

export default GamesSchedule;
