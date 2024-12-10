import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link to={'/admin'}>Lesson</Link></li>
                        <li>
                            <Link to={'/admin/add-lesson'}>Add Lesson</Link>
                        </li>
                        <li><Link to={'/admin/add-vocabulary'}>Add Vocabularies</Link></li>
                        <li><Link to={'/admin/manage-user'}>Manage Users</Link></li>
                        <li><Link to={'/admin/lesson-management'}>Lesson Management</Link></li>
                        <li><Link to={'/admin/vocabulary-management'}>Vocabulariy Management</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
