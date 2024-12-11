import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import UserDashBoard from "../layout/UserDashBoard";
import AdminPanel from "../layout/AdminPanel";
import ErrorPage from "../pages/ErrorPage";
import Lessons from "../pages/Admin/Lessons";
import AddLesson from "../pages/Admin/AddLesson";
import AddVocabulary from "../pages/Admin/AddVocabulary";
import ManageUser from "../pages/Admin/ManageUser";
import VocabulariesManagement from "../pages/Admin/VocabulariesManagement";
import LessonManagement from "../pages/Admin/LessonManagement";
import DashBoard from "../pages/Admin/DashBoard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/user",
        element: (
            <PrivateRoute roleRequired="user">
                <UserDashBoard />
            </PrivateRoute>
        ),
    },
    {
        path: "/admin",
        element: (
            <PrivateRoute roleRequired="admin">
                <AdminPanel />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/admin",
                element: <DashBoard />
            },
            {
                path: "/admin/lesson",
                element: <Lessons />
            },
            {
                path: "/admin/add-lesson",
                element: <AddLesson />
            },
            {
                path: "/admin/add-vocabulary",
                element: <AddVocabulary />
            },
            {
                path: "/admin/manage-user",
                element: <ManageUser />
            },
            {
                path: '/admin/lesson-management',
                element: <LessonManagement />
            },
            {
                path: '/admin/vocabulary-management',
                element: <VocabulariesManagement />,
                loader: async () => await fetch('http://localhost:5001/api/all-vocabulary')
            },
            {
                path: '/admin/vocabulary-update/:id',
                element: <VocabulariesManagement />
            }
        ]
    },
]);

export default router;
