import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader, Header } from '../../components';

const Layout = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default Layout;
