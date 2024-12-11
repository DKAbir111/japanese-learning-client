import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UpdateVocabulary() {
    const vocab = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const word = e.target.word.value;
        const pronunciation = e.target.pronunciation.value;
        const whenToSay = e.target.whenToSay.value;
        const lessonNo = e.target.lessonNo.value;
        const adminEmail = e.target.adminEmail.value;

        const updatedVocabulary = {
            word,
            pronunciation,
            whenToSay,
            lessonNo,
            adminEmail
        };

        const token = localStorage.getItem('authToken');

        try {
            await axios.put(`http://localhost:5001/api/vocabulary/${vocab._id}`, updatedVocabulary, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            toast.success("Vocabulary updated successfully")
            navigate(-1);
        } catch (error) {
            console.error('Error updating vocabulary:', error);
        }
    };

    return (
        <div className="min-h-screen py-10">
            <div className="w-10/12 mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-8">
                    Update Vocabulary
                </h1>
                <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Japanese Word
                            </label>
                            <input
                                type="text"
                                name="word"
                                defaultValue={vocab.word}
                                placeholder="Enter Japanese Word (e.g., こんにちは)"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Pronunciation
                            </label>
                            <input
                                type="text"
                                name="pronunciation"
                                defaultValue={vocab.pronunciation}
                                placeholder="Enter Pronunciation (e.g., Konnichiwa)"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                When to Say
                            </label>
                            <textarea
                                name="whenToSay"
                                defaultValue={vocab.whenToSay}
                                placeholder="Enter a description (e.g., Used for greeting)"
                                className="textarea textarea-bordered w-full"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Lesson Number
                            </label>
                            <input
                                type="number"
                                defaultValue={vocab.lessonNo}
                                name="lessonNo"
                                placeholder="Enter Lesson Number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Admin Email
                            </label>
                            <input
                                type="email"
                                name="adminEmail"
                                defaultValue={vocab.adminEmail}
                                placeholder="Enter Admin Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex  justify-between space-x-4 col-span-2">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="btn bg-gray-500 text-white px-6"
                            >
                                Go Back
                            </button>
                            <button
                                type="submit"
                                className="btn bg-[#5d5ced] text-white px-6"
                            >
                                Update Vocabulary
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
