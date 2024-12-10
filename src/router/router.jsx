import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import UserDashBoard from "../layout/UserDashBoard";
import AdminPanel from "../layout/AdminPanel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/user',
        element: <PrivateRoute> <UserDashBoard /> </PrivateRoute>
    },
    {
        path: '/admin',
        element: <PrivateRoute roleRequired="admin"> <AdminPanel /> </PrivateRoute>
    }
])

export default router;