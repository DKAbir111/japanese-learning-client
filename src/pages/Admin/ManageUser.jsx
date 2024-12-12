import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function ManageUser() {
    const users = useLoaderData();
    const [userList, setUserList] = useState(users);

    // Update user role
    const handleRoleUpdate = async (id, newRole) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to ${newRole === "admin" ? "promote" : "demote"} this user.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${newRole === "admin" ? "promote" : "demote"}!`
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.put(
                        `https://japanese-learing-server.vercel.app/api/auth/update-role/${id}`,
                        { role: newRole },
                        {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem("authToken")}`,
                            },
                        }
                    );

                    if (response.status === 200) {
                        Swal.fire({
                            title: "Success!",
                            text: `User role updated to ${newRole}.`,
                            icon: "success",
                        });


                        setUserList((prevList) =>
                            prevList.map((user) =>
                                user._id === id ? { ...user, role: newRole } : user
                            )
                        );
                    }
                } catch (error) {
                    console.error("Error updating user role:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to update user role. Please try again.",
                        icon: "error",
                    });
                }
            }
        });
    };

    return (
        <div className="min-h-screen py-10 px-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center mb-8">User Management</h1>
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-[#5d5ced] text-white">
                                <th className="py-2 px-4">User Name</th>
                                <th className="py-2 px-4">Email</th>
                                <th className="py-2 px-4">Role</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4">{user.username}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.role}</td>
                                    <td className="py-2 px-4 flex space-x-2">
                                        {user.role === "user" ? (
                                            <button
                                                className="btn bg-[#5d5ced] text-white"
                                                onClick={() => handleRoleUpdate(user._id, "admin")}
                                            >
                                                Promote to Admin
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-error text-white"
                                                onClick={() => handleRoleUpdate(user._id, "user")}
                                            >
                                                Demote to User
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
