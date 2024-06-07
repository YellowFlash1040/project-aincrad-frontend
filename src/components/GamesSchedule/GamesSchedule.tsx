import s from './GamesSchedule.module.css';

const GamesSchedule = () => {
  const imageUrl = 'https://picsum.photos/seed/picsum/140/180';

  return (
    <ul className={s.gamesList}>
      <li className={s.gameCard}>
        <img src={imageUrl} alt="" width={140} height={180} />
      </li>
      <li className={s.gameCard}>
        <img src={imageUrl} alt="" width={140} height={180} />
      </li>
      <li className={s.gameCard}>
        <img src={imageUrl} alt="" width={140} height={180} />
      </li>
      <li className={s.gameCard}>
        <img src={imageUrl} alt="" width={140} height={180} />
      </li>
      <li className={s.gameCard}>
        <img src={imageUrl} alt="" width={140} height={180} />
      </li>
      <li className={s.gameCard}>
        <img src={imageUrl} alt="" width={140} height={180} />
      </li>
      <li className={s.gameCard}>
        <img src={imageUrl} alt="" width={140} height={180} />
      </li>
    </ul>
  );
};

export default GamesSchedule;
