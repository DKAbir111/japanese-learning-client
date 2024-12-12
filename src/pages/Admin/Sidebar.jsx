import { Link, NavLink } from "react-router-dom";
import { MdDashboard, MdLibraryBooks, MdAdd, MdPeople, MdOutlineManageAccounts } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";

export default function Sidebar() {
    return (
        <aside>
            <div className="drawer lg:drawer-open z-10">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn bg-[#5D5CED] drawer-button lg:hidden text-2xl absolute top-0 left-0 z-20 border-none">
                        <MdMenuOpen />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="bg-gray-900 text-white min-h-full p-4 flex flex-col justify-center">
                        {/* Sidebar content */}
                        <li className="mb-3">
                            <Link
                                to="/admin"
                                className="flex flex-col items-center bg-gray-800 p-2 rounded-lg text-white  duration-300"
                            >
                                <MdDashboard className="text-2xl" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="mb-3">
                            <NavLink
                                to="/admin/lesson"
                                className="flex  flex-col items-center bg-gray-800 p-2 rounded-lg text-white hover:bg-[#5D5CED] duration-300"
                            >
                                <MdLibraryBooks className="text-2xl" />
                                Lessons
                            </NavLink>
                        </li>
                        <li className="mb-3">
                            <NavLink
                                to="/admin/add-lesson"
                                className="flex flex-col items-center bg-gray-800 p-2 rounded-lg text-white hover:bg-[#5D5CED] duration-300"
                            >
                                <MdLibraryAdd className="text-2xl" />
                                Add Lesson
                            </NavLink>
                        </li>
                        <li className="mb-3">
                            <NavLink
                                to="/admin/add-vocabulary"
                                className="flex flex-col items-center bg-gray-800 p-2 rounded-lg text-white hover:bg-[#5D5CED] duration-300"
                            >
                                <MdAdd className="text-2xl" />
                                Add Vocabulary
                            </NavLink>
                        </li>
                        <li className="mb-3">
                            <NavLink
                                to="/admin/manage-user"
                                className="flex flex-col items-center bg-gray-800 p-2 rounded-lg text-white hover:bg-[#5D5CED] duration-300"
                            >
                                <MdPeople className="text-2xl" />
                                Manage Users
                            </NavLink>
                        </li>
                        <li className="mb-3">
                            <NavLink
                                to="/admin/lesson-management"
                                className="flex flex-col items-center bg-gray-800 p-2 rounded-lg text-white hover:bg-[#5D5CED] duration-300"
                            >
                                <MdOutlineManageAccounts className="text-2xl" />
                                Lesson Management
                            </NavLink>
                        </li>
                        <li className="mb-3">
                            <NavLink
                                to="/admin/vocabulary-management"
                                className="flex flex-col items-center bg-gray-800 p-2 rounded-lg text-white hover:bg-[#5D5CED] duration-300"
                            >
                                <FaBookReader className="text-2xl" />
                                Vocabulary Management
                            </NavLink>
                        </li>
                        <li className="mb-3">
                            <NavLink
                                to="/admin/tutorial"
                                className="flex flex-col items-center bg-gray-800 p-2 rounded-lg text-white hover:bg-[#5D5CED] duration-300"
                            >
                                <MdOndemandVideo className="text-2xl" />
                                Tutorial
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
