import { useEffect, useState } from "react";
import axios from "axios";
import DashBoardCard from "./card/DashBoardCard";

export default function DashBoard() {
    const [dashboardData, setDashboardData] = useState({
        totalUsers: 0,
        totalAdmins: 0, // added totalAdmins
        totalVocabulary: 0,
        totalLessons: 0,
        totalWords: 0, // added totalWords
    });

    // Fetch dashboard data
    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem("authToken"); // Ensure the token key matches your implementation
                const { data } = await axios.get("https://japanese-learing-server.vercel.app/api/dashboard", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setDashboardData(data);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
                // Optionally, handle errors (e.g., redirect to login if unauthorized)
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <DashBoardCard
                        title="Total Users"
                        count={dashboardData.totalUsers}
                        bgColor="bg-blue-500"
                        icon="👤"
                    />
                    <DashBoardCard
                        title="Total Admins"
                        count={dashboardData.totalAdmins}
                        bgColor="bg-green-500"
                        icon="👑"
                    />
                    <DashBoardCard
                        title="Total Vocabulary"
                        count={dashboardData.totalVocabulary}
                        bgColor="bg-yellow-500"
                        icon="📚"
                    />
                    <DashBoardCard
                        title="Total Lessons"
                        count={dashboardData.totalLessons}
                        bgColor="bg-purple-500"
                        icon="📖"
                    />
                </div>
            </div>
        </div>
    );
}
