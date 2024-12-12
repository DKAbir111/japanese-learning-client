import axios from 'axios';
import { toast } from 'react-toastify';
export default function AddVocabulary() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const word = e.target.word.value;
        const pronunciation = e.target.pronunciation.value;
        const whenToSay = e.target.whenToSay.value;
        const lessonNo = e.target.lessonNo.value;
        const adminEmail = e.target.adminEmail.value;
        const newVocabulary = {
            word,
            pronunciation,
            whenToSay,
            lessonNo,
            adminEmail
        }
        const token = localStorage.getItem('authToken');

        try {
            const response = await axios.post('https://japanese-learing-server.vercel.app/api/add-vocabulary', newVocabulary, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            if (response.data) {
                toast.success("Vocabulary added successfully");
            }
            e.target.reset()
        } catch (error) {

            if (error) {
                toast.error("You are trying to add same vocabulary twice")
                console.error('Error adding vocabulary:', error);
            }
        }
    };

    return (
        <div className="min-h-screen py-10">
            <div className="w-10/12 mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-8">
                    Add New Vocabulary
                </h1>
                <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit} className="md:grid grid-cols-2 gap-3">
                        <div className="">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Japanese Word
                            </label>
                            <input
                                type="text"
                                name="word"
                                placeholder="Enter Japanese Word (e.g., こんにちは)"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Pronunciation
                            </label>
                            <input
                                type="text"
                                name="pronunciation"
                                placeholder="Enter Pronunciation (e.g., Konnichiwa)"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="col-span-2" >
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                When to Say
                            </label>
                            <textarea
                                name="whenToSay"
                                placeholder="Enter a description (e.g., Used for greeting)"
                                className="textarea textarea-bordered w-full"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div className="">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Lesson Number
                            </label>
                            <input
                                type="number"
                                name="lessonNo"
                                placeholder="Enter Lesson Number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Admin Email
                            </label>
                            <input
                                type="email"
                                name="adminEmail"
                                placeholder="Enter Admin Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-center space-x-4 col-span-2">
                            <button
                                type="submit"
                                className="btn bg-[#5d5ced] text-white px-6"
                            >
                                Add Vocabulary
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
