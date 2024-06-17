import {
  PageContainer,
  GamesSchedule,
  TopNewReleases,
  ViewMoreButton,
  ThingsOfTheMonth,
  GameOverviews,
  TopFreeGames,
  SideBar
} from '../../components';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <SideBar />
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
      <section className={s.thingsOfTheMonthSection}>
        <PageContainer>
          <h2 className={'visually-hidden'}>Things of the month</h2>
          <ThingsOfTheMonth />
        </PageContainer>
      </section>
      <section className={s.communitySpecialsSection}>
        <PageContainer>
          <h2 className={'visually-hidden'}>Community specials</h2>
          <ul className={s.communitySpecialsList}>
            <li>
              <GameOverviews />
            </li>
            <li>
              <TopFreeGames />
            </li>
          </ul>
        </PageContainer>
      </section>
    </>
  );
};

export default HomePage;
