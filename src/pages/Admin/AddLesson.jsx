import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddLesson() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const lessonName = e.target.name.value;
        const lessonNumber = e.target.number.value;

        const newLesson = { lessonName, lessonNumber };

        const token = localStorage.getItem('authToken');

        try {
            // Send the POST request with lesson data and token for authentication
            const response = await axios.post('https://japanese-learing-server.vercel.app/api/add-lesson', newLesson, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });
            if (response.data) {
                toast.success("Lesson added successfully");
                e.target.reset();

            }
        } catch (error) {
            if (error) {
                return toast.error("Failed to add lesson")
            }

        }
    };


    return (
        <div className="min-h-screen  py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-8">
                    Create a New Lesson
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
                                placeholder="Enter Lesson Number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="submit"
                                className="btn bg-[#5d5ced] text-white hover:bg-primary-dark px-6"
                            >
                                Create Lesson
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
