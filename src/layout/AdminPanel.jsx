import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Admin/Sidebar";
import TopBar from "../pages/Admin/TopBar";

export default function AdminPanel() {
    return (
        <main className="grid grid-cols-7 ">
            <nav className="col-span-7 mb-16"><TopBar /></nav>
            <aside className="col-span-1">
                <Sidebar />
            </aside>
            <aside className="col-span-6 ml-5">
                <Outlet />
            </aside>
        </main>

    )
}
