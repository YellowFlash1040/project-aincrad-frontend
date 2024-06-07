import {
  PageContainer,
  GamesSchedule,
  TopNewReleases,
  ViewMoreButton
} from '../../components';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={s.gamesScheduleSection}>
        <PageContainer className={s.gamesScheduleSectionContainer}>
          <h2 className={s.gamesScheduleSectionTitle}>Games schedule</h2>
          <GamesSchedule />
        </PageContainer>
      </section>
      <section className={s.topNewReleasesSection}>
        <PageContainer className={s.topNewReleasesSectionContainer}>
          <div className={s.panelHeader}>
            <h2 className={s.topNewReleasesSectionTitle}>Top new releases</h2>
            <ViewMoreButton link="/" />
          </div>
          <TopNewReleases />
        </PageContainer>
      </section>
    </>
  );
};

export default HomePage;
