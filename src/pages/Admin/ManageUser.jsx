import { useState, useEffect } from "react";

export default function ManageUser() {
    const [users, setUsers] = useState([]);

    // Simulate fetching users
    useEffect(() => {
        const fetchUsers = async () => {
            // Replace with your API call
            const mockData = [
                { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
                { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
                { id: 3, name: "Mike Ross", email: "mike@example.com", role: "User" },
            ];
            setUsers(mockData);
        };

        fetchUsers();
    }, []);

    // Update user role
    const handleRoleUpdate = (id, newRole) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, role: newRole } : user
            )
        );
        alert(`User role updated to ${newRole}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-primary text-center mb-8">
                    👤 User Management
                </h1>
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="py-2 px-4">User Name</th>
                                <th className="py-2 px-4">Email</th>
                                <th className="py-2 px-4">Role</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4">{user.name}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.role}</td>
                                    <td className="py-2 px-4 flex space-x-2">
                                        {user.role === "User" ? (
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => handleRoleUpdate(user.id, "Admin")}
                                            >
                                                Promote to Admin
                                            </button>
                                        ) : (
                                            <button
                                                className="btn btn-error"
                                                onClick={() => handleRoleUpdate(user.id, "User")}
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
