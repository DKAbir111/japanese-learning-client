export default function Lessons() {
    // Sample data for lessons
    const lessons = [
        { id: 1, name: "Basic Greetings", number: 1, vocabCount: 15 },
        { id: 2, name: "Numbers", number: 2, vocabCount: 10 },
        { id: 3, name: "Family Members", number: 3, vocabCount: 12 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-primary text-center mb-8">
                    📚 All Lessons
                </h1>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg shadow-lg overflow-hidden">
                        <thead className="bg-primary text-white text-left">
                            <tr>
                                <th className="px-6 py-4 text-lg">Lesson Name</th>
                                <th className="px-6 py-4 text-lg">Lesson Number</th>
                                <th className="px-6 py-4 text-lg">Vocabulary Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lessons.map((lesson) => (
                                <tr
                                    key={lesson.id}
                                    className="hover:bg-gray-100 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 text-gray-700">{lesson.name}</td>
                                    <td className="px-6 py-4 text-gray-700">{lesson.number}</td>
                                    <td className="px-6 py-4 text-gray-700">{lesson.vocabCount}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}