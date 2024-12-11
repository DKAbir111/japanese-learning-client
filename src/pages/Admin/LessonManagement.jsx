import { useState } from "react";


export default function LessonManagement() {
    // Simulating lesson data
    const [lesson, setLesson] = useState({
        name: "Basic Greetings",
        number: 1,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLesson((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call to update the lesson
        console.log("Updated Lesson:", lesson);
        alert("Lesson updated successfully!");
    };

    return (
        <div className="min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-8">
                    Edit Lesson
                </h1>
                <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Lesson Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={lesson.name}
                                onChange={handleInputChange}
                                placeholder="Enter Lesson Name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Lesson Number
                            </label>
                            <input
                                type="number"
                                name="number"
                                value={lesson.number}
                                onChange={handleInputChange}
                                placeholder="Enter Lesson Number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => alert("Cancelled")}
                                className="btn bg-gray-300 text-gray-700 hover:bg-gray-400 px-6"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn bg-[#5d5ced] text-white hover:bg-primary-dark px-6"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
