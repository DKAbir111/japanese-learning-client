import { useState } from "react";

export default function AddVocabulary() {
    const [vocabulary, setVocabulary] = useState({
        word: "",
        pronunciation: "",
        whenToSay: "",
        lessonNo: "",
        adminEmail: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVocabulary((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call to save the vocabulary entry
        console.log("Vocabulary Created:", vocabulary);
        alert("Vocabulary created successfully!");
        setVocabulary({
            word: "",
            pronunciation: "",
            whenToSay: "",
            lessonNo: "",
            adminEmail: "",
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-primary text-center mb-8">
                    ➕ Add New Vocabulary
                </h1>
                <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Japanese Word
                            </label>
                            <input
                                type="text"
                                name="word"
                                value={vocabulary.word}
                                onChange={handleInputChange}
                                placeholder="Enter Japanese Word (e.g., こんにちは)"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Pronunciation
                            </label>
                            <input
                                type="text"
                                name="pronunciation"
                                value={vocabulary.pronunciation}
                                onChange={handleInputChange}
                                placeholder="Enter Pronunciation (e.g., Konnichiwa)"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                When to Say
                            </label>
                            <textarea
                                name="whenToSay"
                                value={vocabulary.whenToSay}
                                onChange={handleInputChange}
                                placeholder="Enter a description (e.g., Used for greeting)"
                                className="textarea textarea-bordered w-full"
                                rows="3"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Lesson Number
                            </label>
                            <input
                                type="number"
                                name="lessonNo"
                                value={vocabulary.lessonNo}
                                onChange={handleInputChange}
                                placeholder="Enter Lesson Number"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-lg font-medium text-gray-700 mb-2">
                                Admin Email
                            </label>
                            <input
                                type="email"
                                name="adminEmail"
                                value={vocabulary.adminEmail}
                                onChange={handleInputChange}
                                placeholder="Enter Admin Email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="reset"
                                onClick={() =>
                                    setVocabulary({
                                        word: "",
                                        pronunciation: "",
                                        whenToSay: "",
                                        lessonNo: "",
                                        adminEmail: "",
                                    })
                                }
                                className="btn bg-gray-300 text-gray-700 hover:bg-gray-400 px-6"
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="btn bg-primary text-white hover:bg-primary-dark px-6"
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
