import { Routes, Route } from 'react-router-dom';
import AuthenticationPage from '../pages/AuthenticationPage';

const AuthRouter = () => (
    <Routes>
        <Route path="/auth" element={<AuthenticationPage />} />
    </Routes>
);

export default AuthRouter;