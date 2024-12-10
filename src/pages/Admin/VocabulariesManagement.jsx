import { useState, useEffect } from "react";

export default function VocabulariesManagement() {
    const [vocabularies, setVocabularies] = useState([]);
    const [filterLessonNo, setFilterLessonNo] = useState("");

    // Simulate fetching data
    useEffect(() => {
        const fetchVocabularies = async () => {
            // Replace with your API call
            const mockData = [
                {
                    id: 1,
                    word: "こんにちは",
                    pronunciation: "Konnichiwa",
                    meaning: "Hello",
                    whenToSay: "Used for greeting",
                    lessonNo: 1,
                },
                {
                    id: 2,
                    word: "ありがとう",
                    pronunciation: "Arigatou",
                    meaning: "Thank you",
                    whenToSay: "Used for expressing gratitude",
                    lessonNo: 1,
                },
                {
                    id: 3,
                    word: "さようなら",
                    pronunciation: "Sayonara",
                    meaning: "Goodbye",
                    whenToSay: "Used when parting ways",
                    lessonNo: 2,
                },
            ];
            setVocabularies(mockData);
        };

        fetchVocabularies();
    }, []);

    // Filter vocabularies by Lesson Number
    const filteredVocabularies = filterLessonNo
        ? vocabularies.filter((vocab) => vocab.lessonNo === parseInt(filterLessonNo))
        : vocabularies;

    // Handle delete
    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this vocabulary?"
        );
        if (confirmDelete) {
            setVocabularies((prev) => prev.filter((vocab) => vocab.id !== id));
            alert("Vocabulary deleted successfully.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-primary text-center mb-8">
                    📚 View All Vocabularies
                </h1>
                <div className="flex justify-end mb-4">
                    <input
                        type="number"
                        placeholder="Filter by Lesson No"
                        value={filterLessonNo}
                        onChange={(e) => setFilterLessonNo(e.target.value)}
                        className="input input-bordered w-1/4"
                    />
                </div>
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="table-auto w-full">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="py-2 px-4">Word</th>
                                <th className="py-2 px-4">Meaning</th>
                                <th className="py-2 px-4">Pronunciation</th>
                                <th className="py-2 px-4">When to Say</th>
                                <th className="py-2 px-4">Lesson No</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredVocabularies.length > 0 ? (
                                filteredVocabularies.map((vocab) => (
                                    <tr key={vocab.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4">{vocab.word}</td>
                                        <td className="py-2 px-4">{vocab.meaning}</td>
                                        <td className="py-2 px-4">{vocab.pronunciation}</td>
                                        <td className="py-2 px-4">{vocab.whenToSay}</td>
                                        <td className="py-2 px-4">{vocab.lessonNo}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => alert("Edit feature to be implemented.")}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-error"
                                                onClick={() => handleDelete(vocab.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
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
