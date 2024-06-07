import { PageContainer, GamesSchedule } from '../../components';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={s.gamesScheduleSection}>
      <PageContainer className={s.gamesScheduleSectionContainer}>
        <h2 className={s.gamesScheduleSectionTitle}>Games schedule</h2>
        <GamesSchedule />
      </PageContainer>
    </section>
  );
};

export default HomePage;
