import { Outlet } from "react-router-dom";
import Footer from "../pages/User/Footer";
import Navbar from "../pages/User/Navbar";


export default function UserDashBoard() {
    return (
        <div>
            <nav className="">
                <Navbar />
            </nav>
            <Outlet />
            <Footer />
        </div>
    )
}
