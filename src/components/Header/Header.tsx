import { PageContainer, Navigation, SearchBar, UserPanel, Logo } from '../../components';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <PageContainer className={s.container}>
        <Navigation className={s.navigation} />
        <Logo className={s.logo} />
        <SearchBar className={s.searchBar} />
        <UserPanel />
      </PageContainer>
    </header>
  );
};

export default Header;
