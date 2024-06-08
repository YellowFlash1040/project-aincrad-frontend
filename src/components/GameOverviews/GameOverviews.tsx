import { ViewMoreHeader } from '../../components';
import s from './GameOverviews.module.css';

const GameOverviews = () => {
  const imagesUrl =
    'https://fastly.picsum.photos/id/116/3504/2336.jpg?hmac=C46vgpj3R407e8pCyy8NhIsNaBZCjb4r5d71keNgMJY';

  return (
    <>
      <ViewMoreHeader className={s.header} title="Game overviews" link="/" />
      <ul className={s.overviewsList}>
        <li className={s.overviewCard}>
          <img src={imagesUrl} alt="" width={194} height={240} />
        </li>
        <li className={s.overviewCard}>
          <img src={imagesUrl} alt="" width={194} height={240} />
        </li>
        <li className={s.overviewCard}>
          <img src={imagesUrl} alt="" width={194} height={240} />
        </li>
      </ul>
    </>
  );
};

export default GameOverviews;
