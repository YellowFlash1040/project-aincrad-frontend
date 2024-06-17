import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TestPage = lazy(() => import('./pages/TestPage/TestPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="test" element={<TestPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />}></Route>
    </Routes>
  );
};

export default App;
