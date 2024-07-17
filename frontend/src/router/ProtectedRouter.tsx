import { Routes, Route, Navigate } from 'react-router-dom';
import TopicDetailPage from '../pages/TopicDetailPage';
import NavBar2 from '../components/NavBar2';
import DashboardPage from '../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';

const ProtectedRouter = () => (
    <>
        <NavBar2 />
        <Routes>
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/topic-detail" element={<TopicDetailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    </>
);

export default ProtectedRouter;