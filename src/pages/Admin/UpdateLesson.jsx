import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function UpdateLesson() {
    const lesson = useLoaderData()
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const lessonName = e.target.name.value;
        const lessonNumber = e.target.number.value;

        const newLesson = { lessonName, lessonNumber };

        const token = localStorage.getItem('authToken');

        try {
            const response = await axios.put(`http://localhost:5001/api/lessons/${lesson._id}`, newLesson, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                toast.success("Lesson added successfully")
                navigate(-1);
            }
        } catch (error) {
            console.error('Verification failed:', error);
        }
    };
    const navigatye = useNavigate()


    return (
        <div className="min-h-screen  py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-8">
                    Update Lesson
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
                                defaultValue={lesson.lessonName}
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
                                defaultValue={lesson.lessonNumber}
                                placeholder="Enter Lesson Number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-between space-x-4">
                            <button
                                type="button"
                                className="btn bg-gray-500 text-white hover:bg-primary-dark px-6"
                                onClick={() => navigatye(-1)}
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="btn bg-[#5d5ced] text-white hover:bg-primary-dark px-6"
                            >
                                Update Lesson
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
