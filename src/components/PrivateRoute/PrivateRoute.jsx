import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
const PrivateRoute = ({ children, roleRequired }) => {
    const token = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole'); // Save role during login

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (roleRequired && userRole !== roleRequired) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roleRequired: PropTypes.string
}
