import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import VocabularyCard from "./card/VocabularyCard";

export default function VocabulariesManagement() {
    const data = useLoaderData()
    const [existingData, setExistingData] = useState(data)
    const token = localStorage.getItem('authToken');
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`http://localhost:5001/api/vocabulary/${id}`, {
                        headers: {
                            authorization: `Bearer ${token}`,
                        },
                    });
                    if (response.status === 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Vocabulary has been deleted.",
                            icon: "success",
                        });
                        const remainingData = existingData.filter(datum => datum._id !== id)
                        setExistingData(remainingData);
                    }
                } catch (error) {
                    console.error("Error deleting vocabulary:", error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete the vocabulary. Please try again.",
                        icon: "error",
                    });
                }
            }
        });
    };
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center mb-8">
                    View All Vocabularies
                </h1>
                <div className="flex justify-end mb-4">
                    <input
                        type="number"
                        placeholder="Filter by Lesson No"
                        className="input input-bordered w-1/4"
                    />
                </div>
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-[#5d5ced] text-white">
                                <th className="py-2 px-4">Word</th>
                                <th className="py-2 px-4">Meaning</th>
                                <th className="py-2 px-4">Pronunciation</th>
                                <th className="py-2 px-4">When to Say</th>
                                <th className="py-2 px-4">Lesson No</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {existingData.length > 0 ? (
                                existingData.map((vocab) => (
                                    <VocabularyCard vocab={vocab} key={vocab._id} handleDelete={handleDelete} />
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center text-gray-500 py-4"
                                    >
                                        No vocabularies found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
