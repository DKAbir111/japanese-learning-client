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
        <div className="min-h-screen py-10">
            <div className="w-10/12 mx-auto px-4">
                <h1 className="text-2xl font-bold text-center mb-8">
                    Add New Vocabulary
                </h1>
                <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
                        <div className="">
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
                        <div className="">
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
                        <div className="col-span-2" >
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
                        <div className="">
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
                        <div className="">
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
                        <div className="flex justify-center space-x-4 col-span-2">
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
                                className="btn btn-error text-white px-6"
                            >
                                Clear
                            </button>
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
