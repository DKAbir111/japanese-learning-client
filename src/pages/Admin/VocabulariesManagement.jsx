import { Link, useLoaderData } from "react-router-dom";

export default function VocabulariesManagement() {
    const data = useLoaderData()
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
                            {data.length > 0 ? (
                                data.map((vocab) => (
                                    <tr key={vocab.id} className="hover:bg-gray-50">
                                        <td className="py-2 px-4">{vocab.word}</td>
                                        <td className="py-2 px-4">{vocab.meaning}</td>
                                        <td className="py-2 px-4">{vocab.pronunciation}</td>
                                        <td className="py-2 px-4">{vocab.whenToSay}</td>
                                        <td className="py-2 px-4">{vocab.lessonNo}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <Link to='/admin/vocabulary-update'
                                                className="btn bg-[#5d5ced] text-white"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-error text-white"
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
