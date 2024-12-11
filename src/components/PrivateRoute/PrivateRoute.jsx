import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, roleRequired }) => {
    const [isVerified, setIsVerified] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            const token = localStorage.getItem('authToken');

            if (!token) {
                setIsVerified(false);
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get('http://localhost:5001/api/verify/profile', {
                    headers: { Authorization: `Bearer ${token}` },
                });


                if (roleRequired && response.data.user.role !== roleRequired) {
                    setIsVerified(false);
                } else {
                    setIsVerified(true);
                }
            } catch (error) {
                console.error('Verification failed:', error);
                setIsVerified(false);
            } finally {
                setLoading(false);
            }
        };

        verifyUser();
    }, [roleRequired]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state while verifying
    }

    if (!isVerified) {
        return <Navigate to="/" />; // Redirect if not verified
    }


    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roleRequired: PropTypes.string, // Role required for the route
};

export default PrivateRoute;
