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
import UpdateVocabulary from "../pages/Admin/UpdateVocabulary";
import UpdateLesson from "../pages/Admin/UpdateLesson";
import Lesson from "../pages/User/Lesson";
import Tutorial from "../pages/User/Tutorial";
import LessonVocabulary from "../pages/User/LessonVocabulary";
import VocabularyDetails from "../pages/User/VocabularyDetsils";
import Tutorials from "../pages/User/Tutorials";

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
        children: [
            {
                path: "/user",
                element: <Lesson />,
                loader: async () => await fetch('http://localhost:5001/api/lessons')
            },

            {
                path: "/user/tutorial",
                element: <Tutorial />
            },
            {
                path: "/user/lesson-vocabulary/:id",
                element: <LessonVocabulary />,
                loader: async ({ params }) => await fetch(`http://localhost:5001/api/lesson/${params.id}/vocabulary`)

            },
            {
                path: "/user/vocabulary/:id",
                element: <VocabularyDetails />,
                loader: async ({ params }) =>
                    fetch(`http://localhost:5001/api/vocabulary/${params.id}`),
            },
            {
                path: "/user/tutorials",
                element: <Tutorials />,

            }
        ],
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
                element: <ManageUser />,
                loader: async () => await fetch('http://localhost:5001/api/auth/all-users')
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
                element: <UpdateVocabulary />,
                loader: async ({ params }) => await fetch(`http://localhost:5001/api/vocabulary/${params.id}`)
            },
            {

                path: '/admin/lesson-update/:id',
                element: <UpdateLesson />,
                loader: async ({ params }) => await fetch(`http://localhost:5001/api/lessons/${params.id}`)

            }
        ]
    },
]);

export default router;
