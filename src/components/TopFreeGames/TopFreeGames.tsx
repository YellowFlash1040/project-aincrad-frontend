import { ViewMoreHeader } from '../../components';

import s from './TopFreeGames.module.css';

const TopFreeGames = () => {
  const imagesUrl =
    'https://fastly.picsum.photos/id/195/768/1024.jpg?hmac=rksrWrgeGQzOdzXlnzsTWy2L2zYq4gQei3TBMWCmXsI';

  return (
    <>
      <ViewMoreHeader className={s.header} title="Top free games" link="/" />
      <ul className={s.gamesList}>
        <li className={s.gameCard}>
          <img src={imagesUrl} alt="" width={194} height={240} />
        </li>
        <li className={s.gameCard}>
          <img src={imagesUrl} alt="" width={194} height={240} />
        </li>
        <li className={s.gameCard}>
          <img src={imagesUrl} alt="" width={194} height={240} />
        </li>
      </ul>
    </>
  );
};

export default TopFreeGames;
