import { Outlet } from "react-router-dom";
import TopBar from "../pages/Admin/TopBar";
import Footer from "../pages/User/Footer";


export default function UserDashBoard() {
    return (
        <div>
            <nav className="mb-16">
                <TopBar />
            </nav>
            <Outlet />
            <Footer />
        </div>
    )
}
