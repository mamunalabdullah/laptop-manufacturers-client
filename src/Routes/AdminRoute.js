import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = () => {
    const [admin, loading] = useAdmin();
    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (!admin) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;
};

export default AdminRoute;