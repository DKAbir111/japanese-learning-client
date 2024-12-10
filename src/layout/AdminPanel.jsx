import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Admin/Sidebar";
import TopBar from "../pages/Admin/TopBar";

export default function AdminPanel() {
    return (
        <main>
            <TopBar />
            <section className="grid grid-cols-4">
                <aside className="col-span-1">
                    <Sidebar />
                </aside>
                <div className="col-span-3">
                    <Outlet />
                </div>
            </section>
        </main>

    )
}
