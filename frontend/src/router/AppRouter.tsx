import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import NewsPage from '../pages/NewsPage';
import NewsDetailPage from '../pages/NewsDetailPage';
import NavBar from '../components/NavBar';
import AuthenticationPage from '../pages/AuthenticationPage';

const AppRouter = () => {
  return (
  <>
    <NavBar />
    <Routes>
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
      {/* <Route path="/" element={<Navigate to="/" />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/1" element={<NewsDetailPage />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/auth/login" element={<Navigate to="/auth/device-based/regular/login=signup/user=password=" />} />
      <Route path="/auth/signin" element={<Navigate to="/auth/device-based/regular/login=signup/user=password=" />} />
      <Route path="/auth/device-based/regular/login=signup/user=password=" element={<AuthenticationPage />} />
    </Routes>
  </>
  )
};

export default AppRouter;